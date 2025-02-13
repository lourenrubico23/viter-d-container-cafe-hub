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
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        $NotificationLog->notification_log_start = $_GET['start'];
        $NotificationLog->notification_log_total = 15;

        checkLimitId($NotificationLog->notification_log_start, $NotificationLog->notification_log_total);

        $query = checkReadLimit($NotificationLog);
        $total_result = checkReadAll($NotificationLog);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $NotificationLog->notification_log_total,
            $NotificationLog->notification_log_start
        );

        // return 404 error if endpoint not available
        checkEndpoint();
    }
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
