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
  // check data
  checkPayload($data);
  // get data

  $isUpdateContactUs = $data['isUpdateContactUs'];
  $contact_us->contact_us_datetime = date("Y-m-d H:i:s");

  if ($isUpdateContactUs == "contactUsUpdate") {
    $contact_us->contact_us_aid = $_GET['contactUsid'];
    $contact_us->contact_us_description = $data["contact_us_description"];
    $contact_us->contact_us_button = $data["contact_us_description"];

    checkId($contact_us->contact_us_aid);
    // update
    $query = checkUpdate($contact_us);
  }
  if ($isUpdateContactUs == "formTitleUpdate") {
    $contact_us->contact_us_aid = $_GET['contactUsid'];
    $contact_us->contact_us_form_title = $data["contact_us_form_title"];

    checkId($contact_us->contact_us_aid);
    // update
    $query = checkUpdateFormTitle($contact_us);
  }

  returnSuccess($contact_us, "header", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
