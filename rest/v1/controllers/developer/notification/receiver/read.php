<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
$receiver = new Receiver($conn);

if (array_key_exists("receiverid", $_GET)) {
    $receiver->receiver_aid = $_GET['receiverid'];
    checkId($receiver->receiver_aid);
    $query = checkReadById($receiver);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($receiver);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
