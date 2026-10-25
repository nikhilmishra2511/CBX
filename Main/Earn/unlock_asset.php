<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$email = $_POST['email'];
$coin = $_POST['coin'];

$conn = mysqli_connect("localhost", "root", "", "CBX") or die(mysqli_error($conn));

$sql = "SELECT * FROM LockedAssets WHERE email='$email' AND coin='$coin' ORDER BY lock_time ASC LIMIT 1";
$res = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($res);

if ($row) {
    // Now use lock_timestamp for perfect secondsPassed
    $secondsPassed = time() - $row['lock_timestamp'];
    if ($secondsPassed < 0) {
        $secondsPassed = 0;
    }

    $RATE_PER_SEC = 0.05 / (365 * 24 * 60 * 60);
    $earned = $row['quantity'] * $RATE_PER_SEC * $secondsPassed;
    $earned = round($earned, 18);

    if ($earned < 0) {
        $earned = 0;
    }

    error_log("Unlocking $coin for $email: locked qty={$row['quantity']}, earned=$earned secondsPassed=$secondsPassed");

    $checkAsset = "SELECT * FROM Assets WHERE email='$email' AND coin='$coin'";
    $res2 = mysqli_query($conn, $checkAsset);

    if (mysqli_num_rows($res2) > 0) {
        $updateAssets = "UPDATE Assets 
                         SET quantity = quantity + {$row['quantity']} + {$earned} 
                         WHERE email='$email' AND coin='$coin'";
        mysqli_query($conn, $updateAssets);
    } else {
        $insertAsset = "INSERT INTO Assets (email, coin, quantity) 
                        VALUES ('$email', '$coin', " . ($row['quantity'] + $earned) . ")";
        mysqli_query($conn, $insertAsset);
    }

    $deleteLock = "DELETE FROM LockedAssets WHERE email='$email' AND coin='$coin'";
    mysqli_query($conn, $deleteLock);

    mysqli_close($conn);

    $earned_display = number_format($earned, 18, '.', '');
    echo "<script>alert('Asset unlocked successfully! Earned amount: $earned_display'); window.location.href='earn.html';</script>";
    exit();
} else {
    mysqli_close($conn);
    echo "<script>alert('Error: Locked asset not found.'); window.location.href='earn.html';</script>";
    exit();
}
?>
