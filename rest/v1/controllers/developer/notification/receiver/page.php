<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../../models/developer/notification/receiver/Receiver.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$receiver = new Receiver($conn);
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $receiver->receiver_start = $_GET['start'];
        $receiver->receiver_total = 10;

        checkLimitId($receiver->receiver_start, $receiver->receiver_total);
        $query = checkReadLimit($receiver);
        $total_result = checkReadAll($receiver);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $receiver->receiver_total,
            $receiver->receiver_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
