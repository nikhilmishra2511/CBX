<?php
$email = $_POST["email"];
$coin = $_POST["coin"];
$qty = floatval($_POST["qty"]);
$rcvr = $_POST["rcvr"];
$chn = $_POST["chn"];

$conn = mysqli_connect("localhost", "root", "", "CBX") or die("Connection failed");

// Step 1: Check if user has the coin
$sql = "SELECT quantity FROM Assets WHERE email='$email' AND coin='$coin'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);

if (!$row) {
    echo "You do not own this coin.";
    exit;
}

$currentQty = floatval($row["quantity"]);
if ($qty > $currentQty) {
    echo "Insufficient balance.";
    exit;
}

// Step 2: Deduct the asset from user's holdings
$newQty = $currentQty - $qty;

if ($newQty == 0) {
    // If zero, remove the record
    $updateSql = "DELETE FROM Assets WHERE email='$email' AND coin='$coin'";
} else {
    $updateSql = "UPDATE Assets SET quantity=$newQty WHERE email='$email' AND coin='$coin'";
}
mysqli_query($conn, $updateSql);

// Step 3: Insert into Withdrawal table
// We'll mark sender as the user's email (or can be a placeholder address)
$sndr = $email; // since no blockchain address from user — use email for tracking
$insertSql = "INSERT INTO Withdrawal (sndr, rcvr, chn, coin, qty) 
              VALUES ('$sndr', '$rcvr', '$chn', '$coin', $qty)";
mysqli_query($conn, $insertSql);

// Step 4: Done
echo "Withdrawal successful!";
mysqli_close($conn);
?>