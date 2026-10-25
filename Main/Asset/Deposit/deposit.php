<?php
$conn = mysqli_connect("localhost", "root", "", "CBX") or die("Connection failed");

$email = $_POST['email'];
$coin = $_POST['coin'];
$qty = $_POST['qty'];
$sndr = $_POST['sndr'];
$rcvr = $_POST['rcvr'];
$chn = $_POST['chn'];

// Insert into Deposit table
$insertDeposit = "INSERT INTO Deposit (email, sndr, rcvr, chn, coin, qty) 
                  VALUES ('$email', '$sndr', '$rcvr', '$chn', '$coin', $qty)";
if (!mysqli_query($conn, $insertDeposit)) {
    echo "Error inserting into Deposit: " . mysqli_error($conn);
    exit;
}

// Check if the user already has this coin in Assets
$checkAsset = "SELECT quantity FROM Assets WHERE email='$email' AND coin='$coin'";
$result = mysqli_query($conn, $checkAsset);

if (mysqli_num_rows($result) > 0) {
    // Update existing asset quantity
    $row = mysqli_fetch_assoc($result);
    $newQty = $row['quantity'] + $qty;
    $updateAsset = "UPDATE Assets SET quantity=$newQty WHERE email='$email' AND coin='$coin'";
    if (!mysqli_query($conn, $updateAsset)) {
        echo "Error updating Assets: " . mysqli_error($conn);
        exit;
    }
} else {
    // Insert new asset
    $insertAsset = "INSERT INTO Assets (email, coin, quantity) 
                    VALUES ('$email', '$coin', $qty)";
    if (!mysqli_query($conn, $insertAsset)) {
        echo "Error inserting into Assets: " . mysqli_error($conn);
        exit;
    }
}

echo "Deposit successful.";
mysqli_close($conn);
?>
