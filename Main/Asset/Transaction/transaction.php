<?php
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 1);

$data = json_decode(file_get_contents("php://input"), true);
$email = $data["email"] ?? "";

if (!$email) {
    echo json_encode(["error" => "No email provided"]);
    exit;
}

$conn = mysqli_connect("localhost", "root", "", "CBX");
if (!$conn) {
    echo json_encode(["error" => "DB connection failed"]);
    exit;
}

$sql = "SELECT type, coin, quantity, price_per_unit, fee, timestamp FROM Transactions WHERE email = ? ORDER BY timestamp DESC";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "s", $email);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

$transactions = [];
while ($row = mysqli_fetch_assoc($result)) {
    $transactions[] = $row;
}

echo json_encode($transactions);
mysqli_close($conn);
