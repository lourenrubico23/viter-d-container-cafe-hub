<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$receiver = new Receiver($conn);

if (array_key_exists("receiverid", $_GET)) {
    // get data
    $receiver->receiver_aid = $_GET['receiverid'];
    checkId($receiver->receiver_aid);

    $query = checkDelete($receiver);

    returnSuccess($receiver, "receiver", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
