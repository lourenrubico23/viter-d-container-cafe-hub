<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$contact_us = new ContactUs($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("contactUsid", $_GET)) {
  $contact_us->contact_us_aid = $_GET['contactUsid'];
  checkId($contact_us->contact_us_aid);
  $query = checkReadById($contact_us);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($contact_us);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
