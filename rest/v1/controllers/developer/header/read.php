<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$header = new Header($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("headerid", $_GET)) {
  $header->header_aid = $_GET['headerid'];
  checkId($header->header_aid);
  $query = checkReadById($header);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($header);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
