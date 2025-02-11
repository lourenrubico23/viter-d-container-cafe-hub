<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$about = new About($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("aboutid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateAbout = $data['isUpdateAbout'];
  $pendingDeleteFile = $data['pendingDeleteFile'];
  if ($isUpdateAbout == "aboutUpdate") {
    $about->about_aid = $_GET['aboutid'];
    $about->about_img = $data["about_img"];
    $about->about_description_a = $data["about_description_a"];
    $about->about_description_b = $data["about_description_b"];
    $about->about_description_c = $data["about_description_c"];

    $about_img_old = $data['about_img_old'];
    $about->about_datetime = date("Y-m-d H:i:s");
    checkId($about->about_aid);

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $about->about_img = checkToUploadGoogleDrive(
      $about->about_img, // FILES
      $about_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $about->about_img = checkDeleteGoogleDriveApiFiles(
      $about->about_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($about);
    returnSuccess($about, "about", $query);
  }
}

// return 404 error if endpoint not available
checkEndpoint();
