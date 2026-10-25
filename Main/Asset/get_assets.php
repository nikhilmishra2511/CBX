<?php
$email = $_GET["email"];

$conn = mysqli_connect("localhost", "root", "", "CBX") or die(mysqli_error($conn));
$sql = "SELECT * FROM Assets WHERE email='$email'";
$result = mysqli_query($conn, $sql);

$assets = [];
while ($row = mysqli_fetch_assoc($result)) {
  $assets[] = $row;
}

header('Content-Type: application/json');
echo json_encode($assets);
mysqli_close($conn);
?>
