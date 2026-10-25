<?php
$conn = mysqli_connect("localhost", "root", "", "CBX") or die("Connection failed");

$data = json_decode(file_get_contents("php://input"), true);

$email = $data["email"];
$phone = $data["phone"];
$address = $data["address"];
$country = $data["country"];
$dob = $data["dob"];
$age = $data["age"];
$profilePic = $data["profilePic"]; // This is a base64 string

// Check if entry exists
$check = mysqli_query($conn, "SELECT * FROM Credentials WHERE email='$email'");
if (mysqli_num_rows($check) > 0) {
    // Update existing
    $sql = "UPDATE Credentials SET 
            phone='$phone', address='$address', country='$country',
            dob='$dob', age=$age, profilePic='$profilePic'
            WHERE email='$email'";
} else {
    // Insert new
    $sql = "INSERT INTO Credentials (email, phone, address, country, dob, age, profilePic)
            VALUES ('$email', '$phone', '$address', '$country', '$dob', $age, '$profilePic')";
}

if (mysqli_query($conn, $sql)) {
    echo "Profile saved successfully.";
} else {
    echo "Error saving profile: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
