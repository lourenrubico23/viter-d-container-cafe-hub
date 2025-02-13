<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$receiver = new Receiver($conn);

// check data
checkPayload($data);

$receiver->receiver_name = trim($data["receiver_name"]);
$receiver->receiver_email = trim($data["receiver_email"]);
$receiver->receiver_phone_no = trim($data["receiver_phone_no"]);
$receiver->receiver_is_active = 1;
$receiver->receiver_created = date("Y-m-d H:i:s");
$receiver->receiver_datetime = date("Y-m-d H:i:s");

// check name
isNameExist($receiver, $receiver->receiver_name);

// create
$query = checkCreate($receiver);
returnSuccess($receiver, "receiver", $query);
