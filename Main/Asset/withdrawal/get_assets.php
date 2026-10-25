<?php
$email = $_GET["email"];
$conn = mysqli_connect("localhost", "root", "", "CBX") or die("Connection failed");
$sql = "SELECT coin, quantity FROM assets WHERE email='" . $email . "'";
$result = mysqli_query($conn, $sql);

$data = array();
while ($r = mysqli_fetch_assoc($result)) {
    $data[] = $r;
}

echo json_encode($data);
mysqli_close($conn);
?>
