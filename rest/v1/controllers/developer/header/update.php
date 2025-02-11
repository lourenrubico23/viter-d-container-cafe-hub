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
  // check data
  checkPayload($data);
  // get data

  $isUpdateHeader = $data['isUpdateHeader'];
  $pendingDeleteFile = $data['pendingDeleteFile'];


  if ($isUpdateHeader == "logoUpdate") {
    $header->header_aid = $_GET['headerid'];
    $header->header_logo_img = $data["header_logo_img"];
    $header_logo_img_old = $data['header_logo_img_old'];

    $header->header_datetime = date("Y-m-d H:i:s");
    checkId($header->header_aid);

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $header->header_logo_img = checkToUploadGoogleDrive(
      $header->header_logo_img, // FILES
      $header_logo_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $header->header_logo_img = checkDeleteGoogleDriveApiFiles(
      $header->header_logo_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($header);
    returnSuccess($header, "header", $query);
  }
  if ($isUpdateHeader == "navigationUpdate") {
    $header->header_aid = $_GET['headerid'];
    $header->header_nav_a = $data["header_nav_a"];
    $header->header_nav_b = $data["header_nav_b"];
    $header->header_nav_c = $data["header_nav_c"];
    $header->header_nav_d = $data["header_nav_d"];

    $header->header_datetime = date("Y-m-d H:i:s");
    checkId($header->header_aid);
    // update
    $query = checkUpdateNavigation($header);
    returnSuccess($header, "header", $query);
  }
  if ($isUpdateHeader == "bannerUpdate") {
    $header->header_aid = $_GET['headerid'];
    $header->header_banner_img = $data["header_banner_img"];
    $header->header_banner_title = $data["header_banner_title"];
    $header->header_button_text = $data["header_button_text"];
    $header_banner_img_old = $data['header_banner_img_old'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $header->header_banner_img = checkToUploadGoogleDrive(
      $header->header_banner_img, // FILES
      $header_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $header->header_banner_img = checkDeleteGoogleDriveApiFiles(
      $header->header_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    $header->header_datetime = date("Y-m-d H:i:s");
    checkId($header->header_aid);
    // update
    $query = checkUpdateBanner($header);
    returnSuccess($header, "header", $query);
  }
}

// return 404 error if endpoint not available
checkEndpoint();
