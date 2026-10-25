<?php
$conn = mysqli_connect("localhost", "root", "", "CBX") or die("Connection failed");

$email = $_POST["email"];
$password = $_POST["password"];

$email = mysqli_real_escape_string($conn, $email);
$password = mysqli_real_escape_string($conn, $password);

// First, check if email exists
$check_email = "SELECT * FROM Authentication WHERE email='$email'";
$result_email = mysqli_query($conn, $check_email);

if (mysqli_num_rows($result_email) == 0) {
    echo "Email not registered.";
} else {
    // If email exists, now check if password matches
    $row = mysqli_fetch_assoc($result_email);
    if ($row['password'] === $password) {
        echo "Login successful";
    } else {
        echo "Incorrect password.";
    }
}

mysqli_close($conn);
?>
