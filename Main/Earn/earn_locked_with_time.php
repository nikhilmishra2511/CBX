<?php
$email = $_GET['email'];

$conn = mysqli_connect("localhost", "root", "", "CBX") or die(mysqli_error($conn));

$sql = "SELECT * FROM LockedAssets WHERE email='$email'";
$res = mysqli_query($conn, $sql);

$data = [];

while ($row = mysqli_fetch_assoc($res)) {
    // Send both lock_timestamp and UTC ISO string for display
    $row['lock_time_iso'] = gmdate("Y-m-d\TH:i:s\Z", $row['lock_timestamp']);
    $data[] = $row;
}

mysqli_close($conn);

header('Content-Type: application/json');
echo json_encode($data);
?>
