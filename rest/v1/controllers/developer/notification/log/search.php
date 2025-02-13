<?php
// set http header 
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../../models/developer/notification/log/NotificationLog.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$NotificationLog = new NotificationLog($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    checkPayload($data);
    $NotificationLog->notification_log_search = $data['searchValue'];
    $query = checkSearch($NotificationLog);
    http_response_code(200);
    getQueriedData($query);

    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
