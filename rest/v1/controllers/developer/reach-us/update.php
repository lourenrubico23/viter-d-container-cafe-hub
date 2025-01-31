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
  // check data
  checkPayload($data);
  // get data

  $isUpdateReachUs = $data['isUpdateReachUs'];
  $reach_us->reach_us_datetime = date("Y-m-d H:i:s");

  if ($isUpdateReachUs == "reachUsUpdate") {
    $reach_us->reach_us_aid = $_GET['reachUsid'];
    $reach_us->reach_us_title = $data["reach_us_title"];
    $reach_us->reach_us_address = $data["reach_us_address"];
    $reach_us->reach_us_facebook = $data["reach_us_facebook"];
    $reach_us->reach_us_instagram = $data["reach_us_instagram"];
    $reach_us->reach_us_map_link = $data["reach_us_map_link"];
    $reach_us->reach_us_button = $data["reach_us_button"];

    checkId($reach_us->reach_us_aid);
    // update
    $query = checkUpdate($reach_us);
  }


  returnSuccess($reach_us, "reachUs", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
