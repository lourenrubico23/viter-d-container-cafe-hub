<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$reach_us = new ReachUs($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("reachUsid", $_GET)) {
  $reach_us->reach_us_aid = $_GET['reachUsid'];
  checkId($reach_us->reach_us_aid);
  $query = checkReadById($reach_us);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($reach_us);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
