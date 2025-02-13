<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$NotificationLog = new NotificationLog($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("notificationLogId", $_GET)) {
  $NotificationLog->notification_log_aid = $_GET['notificationLogId'];
  checkId($NotificationLog->notification_log_aid);
  $query = checkReadAll($NotificationLog);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($NotificationLog);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
