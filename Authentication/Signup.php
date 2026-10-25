<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "CBX";

$conn = mysqli_connect($host, $user, $pass, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

if ($username == "" || $email == "" || $password == "") {
    echo "All fields are required.";
    exit();
}

// Check if email already exists
$check = mysqli_query($conn, "SELECT * FROM Authentication WHERE email='$email'");
if (mysqli_num_rows($check) > 0) {
    echo "Email already exists.";
    exit();
}

// Insert new user
$sql = "INSERT INTO Authentication (username, email, password) VALUES ('$username', '$email', '$password')";
if (mysqli_query($conn, $sql)) {
    echo "Signup successful. Redirecting.....";
} else {
    echo "Error: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
