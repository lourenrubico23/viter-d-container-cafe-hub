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
  // check data
  checkPayload($data);
  // get data

  $isUpdateCopyright = $data['isUpdateCopyright'];
  $copyright->copyright_datetime = date("Y-m-d H:i:s");

  if ($isUpdateCopyright == "copyrightUpdate") {
    $copyright->copyright_aid = $_GET['copyrightid'];
    $copyright->copyright_title = $data["copyright_title"];

    checkId($copyright->copyright_aid);
    // update
    $query = checkUpdate($copyright);
  }

  returnSuccess($copyright, "copyright", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
