<?php
$email = $_POST['email'];
$coin = $_POST['coin'];
$qty = floatval($_POST['qty']);

$conn = mysqli_connect("localhost", "root", "", "CBX") or die(mysqli_error($conn));

// Store lock_timestamp in UNIX time
$lock_time_unix = time();
$lock_time = date("Y-m-d H:i:s", $lock_time_unix);

$sql = "INSERT INTO LockedAssets (email, coin, quantity, lock_time, lock_timestamp)
        VALUES ('$email', '$coin', $qty, '$lock_time', $lock_time_unix)";
mysqli_query($conn, $sql);

// Subtract locked qty from Assets
$updateAssets = "UPDATE Assets SET quantity = quantity - $qty 
                 WHERE email='$email' AND coin='$coin'";
mysqli_query($conn, $updateAssets);

mysqli_close($conn);
header("Location: earn.html");
exit();
?>
