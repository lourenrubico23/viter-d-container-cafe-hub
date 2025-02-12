<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$testimonial = new Testimonial($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("testimonialid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateTestimonial = $data['isUpdateTestimonial'];


  if ($isUpdateTestimonial == "testimonialTitleUpdate") {
    $testimonial->testimonial_aid = $_GET['testimonialid'];
    $testimonial->testimonial_title = $data["testimonial_title"];
    $testimonial->testimonial_subtitle = $data["testimonial_subtitle"];

    $testimonial->testimonial_datetime = date("Y-m-d H:i:s");
    checkId($testimonial->testimonial_aid);
    // update
    $query = checkUpdate($testimonial);
    returnSuccess($testimonial, "testimonial", $query);
  }
  if ($isUpdateTestimonial == "testimonialAUpdate") {
    $testimonial->testimonial_aid = $_GET['testimonialid'];
    $testimonial->testimonial_client_img_a = $data["testimonial_client_img_a"];
    $testimonial->testimonial_client_name_a = $data["testimonial_client_name_a"];
    $testimonial->testimonial_client_message_a = $data["testimonial_client_message_a"];

    $testimonial_client_img_a_old = $data['testimonial_client_img_a_old'];
    $pendingDeleteFile = $data['pendingDeleteFile'];
    $testimonial->testimonial_datetime = date("Y-m-d H:i:s");
    checkId($testimonial->testimonial_aid);

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $testimonial->testimonial_client_img_a = checkToUploadGoogleDrive(
      $testimonial->testimonial_client_img_a, // FILES
      $testimonial_client_img_a_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $testimonial->testimonial_client_img_a = checkDeleteGoogleDriveApiFiles(
      $testimonial->testimonial_client_img_a, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdateTestimonialA($testimonial);
    returnSuccess($testimonial, "testimonial", $query);
  }
  if ($isUpdateTestimonial == "testimonialBUpdate") {
    $testimonial->testimonial_aid = $_GET['testimonialid'];
    $testimonial->testimonial_client_img_b = $data["testimonial_client_img_b"];
    $testimonial->testimonial_client_name_b = $data["testimonial_client_name_b"];
    $testimonial->testimonial_client_message_b = $data["testimonial_client_message_b"];

    $testimonial_client_img_b_old = $data['testimonial_client_img_b_old'];
    $pendingDeleteFile = $data['pendingDeleteFile'];
    $testimonial->testimonial_datetime = date("Y-m-d H:i:s");
    checkId($testimonial->testimonial_aid);

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $testimonial->testimonial_client_img_b = checkToUploadGoogleDrive(
      $testimonial->testimonial_client_img_b, // FILES
      $testimonial_client_img_b_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $testimonial->testimonial_client_img_b = checkDeleteGoogleDriveApiFiles(
      $testimonial->testimonial_client_img_b, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdateTestimonialB($testimonial);
    returnSuccess($testimonial, "testimonial", $query);
  }
  if ($isUpdateTestimonial == "testimonialCUpdate") {
    $testimonial->testimonial_aid = $_GET['testimonialid'];
    $testimonial->testimonial_client_img_c = $data["testimonial_client_img_c"];
    $testimonial->testimonial_client_name_c = $data["testimonial_client_name_c"];
    $testimonial->testimonial_client_message_c = $data["testimonial_client_message_c"];

    $testimonial_client_img_c_old = $data['testimonial_client_img_c_old'];
    $pendingDeleteFile = $data['pendingDeleteFile'];
    $testimonial->testimonial_datetime = date("Y-m-d H:i:s");
    checkId($testimonial->testimonial_aid);

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $testimonial->testimonial_client_img_c = checkToUploadGoogleDrive(
      $testimonial->testimonial_client_img_c, // FILES
      $testimonial_client_img_c_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $testimonial->testimonial_client_img_c = checkDeleteGoogleDriveApiFiles(
      $testimonial->testimonial_client_img_c, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdateTestimonialC($testimonial);
    returnSuccess($testimonial, "testimonial", $query);
  }
}

// return 404 error if endpoint not available
checkEndpoint();
