<?php
$conn = null;
$conn = checkDbConnection();
$receiver = new Receiver($conn);

if (array_key_exists("receiverid", $_GET)) {
    // check data
    checkPayload($data);

    $receiver->receiver_aid = $_GET['receiverid'];
    $receiver->receiver_name = trim($data["receiver_name"]);
    $receiver->receiver_email = trim($data["receiver_email"]);
    $receiver->receiver_phone_no = trim($data["receiver_phone_no"]);
    $receiver->receiver_datetime = date("Y-m-d H:i:s");
    checkId($receiver->receiver_aid);

    //checks current data to avoid same entries from being updated
    $receiver_name_old = checkIndex($data, 'receiver_name_old');
    compareName($receiver, $receiver_name_old, $receiver->receiver_name);


    $query = checkUpdate($receiver);
    returnSuccess($receiver, "receiver", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
