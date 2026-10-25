<?php
$conn = mysqli_connect("localhost", "root", "", "CBX") or die("Connection failed");

$email = $_POST["email"];
$email = mysqli_real_escape_string($conn, $email);

$sql = "SELECT username FROM Authentication WHERE email='$email'";
$result = mysqli_query($conn, $sql);

if ($row = mysqli_fetch_assoc($result)) {
  echo $row['username'];
} else {
  echo "User";
}

mysqli_close($conn);
?>
