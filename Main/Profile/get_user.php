<?php
$conn = mysqli_connect("localhost", "root", "", "CBX") or die("Connection failed");
$email = $_POST["email"];

$sql = "SELECT 
          a.username, a.password,
          c.phone, c.address, c.country, c.dob, c.age, c.profilePic
        FROM Authentication a
        LEFT JOIN Credentials c ON a.email = c.email
        WHERE a.email = '$email'";

$result = mysqli_query($conn, $sql);
if ($row = mysqli_fetch_assoc($result)) {
    echo json_encode($row);
} else {
    echo json_encode(null);
}

mysqli_close($conn);
?>
