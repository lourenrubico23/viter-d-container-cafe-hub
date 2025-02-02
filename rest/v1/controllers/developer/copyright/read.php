<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$copyright = new Copyright($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("copyrightid", $_GET)) {
  $copyright->copyright_aid = $_GET['copyrightid'];
  checkId($copyright->copyright_aid);
  $query = checkReadById($copyright);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($copyright);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
