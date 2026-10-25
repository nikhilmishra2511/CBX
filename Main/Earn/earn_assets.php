<?php
$email = $_GET["email"];
$conn = mysqli_connect("localhost", "root", "", "CBX") or die("DB connection error");

$assets = [];
$locked = [];

// Unlocked assets
$sql = "SELECT A.coin, A.quantity 
        FROM Assets A
        LEFT JOIN LockedAssets L ON A.email=L.email AND A.coin=L.coin
        WHERE A.email='$email' AND (L.coin IS NULL OR A.quantity > L.quantity)";
$res = mysqli_query($conn, $sql);
while ($r = mysqli_fetch_assoc($res)) {
    $assets[] = $r;
}

// Locked assets
$sql2 = "SELECT coin, quantity, lock_time FROM LockedAssets WHERE email='$email'";
$res2 = mysqli_query($conn, $sql2);
while ($r = mysqli_fetch_assoc($res2)) {
    $locked[] = $r;
}

echo json_encode([
  "assets" => $assets,
  "locked" => $locked
]);

mysqli_close($conn);
?>
