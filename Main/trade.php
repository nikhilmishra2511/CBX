<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$data = json_decode(file_get_contents("php://input"), true);
if (!$data) {
    http_response_code(400);
    echo "Invalid JSON";
    exit;
}

$email = $data['email'];
$coin = strtolower($data['coin']);  // example: btc
$type = $data['type'];              // 'buy' or 'sell'
$quantity = floatval($data['quantity']);          // coin amount
$price = floatval($data['price_per_unit']);       // per unit price
$fee = floatval($data['fee']);

$usdtValue = $price * $quantity;   // how much the coin is worth

$conn = mysqli_connect("localhost", "root", "", "CBX") or die("DB connection failed");

// BEGIN TRANSACTION
mysqli_begin_transaction($conn);

try {
    // 1. Get user's USDT and coin balances
    $usdt = 0;
    $coinBal = 0;

    $q1 = mysqli_query($conn, "SELECT quantity FROM Assets WHERE email='$email' AND coin='usdt'");
    if ($r1 = mysqli_fetch_assoc($q1)) $usdt = $r1['quantity'];

    $q2 = mysqli_query($conn, "SELECT quantity FROM Assets WHERE email='$email' AND coin='$coin'");
    if ($r2 = mysqli_fetch_assoc($q2)) $coinBal = $r2['quantity'];

    if ($type === 'buy') {
        $totalCost = $price * $quantity;
        if ($usdt < $totalCost) {
            throw new Exception("Insufficient USDT balance.");
        }

        // Deduct USDT
        mysqli_query($conn, "UPDATE Assets SET quantity = quantity - $totalCost WHERE email='$email' AND coin='usdt'");

        // Add coin (insert or update)
        $updateCoin = mysqli_query($conn, "UPDATE Assets SET quantity = quantity + $quantity WHERE email='$email' AND coin='$coin'");
        if (mysqli_affected_rows($conn) == 0) {
            mysqli_query($conn, "INSERT INTO Assets (email, coin, quantity) VALUES ('$email', '$coin', $quantity)");
        }

    } elseif ($type === 'sell') {
        if ($coinBal < $quantity) {
            throw new Exception("Insufficient $coin balance.");
        }

        // Deduct coin
        mysqli_query($conn, "UPDATE Assets SET quantity = quantity - $quantity WHERE email='$email' AND coin='$coin'");

        // Add USDT (insert or update)
        $updateUsdt = mysqli_query($conn, "UPDATE Assets SET quantity = quantity + $usdtValue WHERE email='$email' AND coin='usdt'");
        if (mysqli_affected_rows($conn) == 0) {
            mysqli_query($conn, "INSERT INTO Assets (email, coin, quantity) VALUES ('$email', 'usdt', $usdtValue)");
        }
    }

    // 3. Record the trade in Transactions
    $stmt = mysqli_prepare($conn, "INSERT INTO Transactions (email, coin, type, quantity, price_per_unit, fee)
        VALUES (?, ?, ?, ?, ?, ?)");
    mysqli_stmt_bind_param($stmt, "sssddd", $email, $coin, $type, $quantity, $price, $fee);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);

    mysqli_commit($conn);
    echo "Trade successful and balances updated.";
} catch (Exception $e) {
    mysqli_rollback($conn);
    echo "Transaction failed: " . $e->getMessage();
}

mysqli_close($conn);
?>
