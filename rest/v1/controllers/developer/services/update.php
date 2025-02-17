<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$services = new Services($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("servicesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateServices = $data['isUpdateServices'];


  if ($isUpdateServices == "coffeeImgUpdate") {
    $services->services_aid = $_GET['servicesid'];
    $services->services_coffee_img = $data["services_coffee_img"];
    $services_coffee_img_old = $data['services_coffee_img_old'];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    $pendingDeleteFile = $data['pendingDeleteFile'];
    // UPLOAD FILE TO GOOGLDE DRIVE  
    $services->services_coffee_img = checkToUploadGoogleDrive(
      $services->services_coffee_img, // FILES
      $services_coffee_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $services->services_coffee_img = checkDeleteGoogleDriveApiFiles(
      $services->services_coffee_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($services);
    returnSuccess($services, "services", $query);
  }
  if ($isUpdateServices == "coffeeGalleryUpdate") {
    $services->services_aid = $_GET['servicesid'];
    $services->services_coffee_gallery = $data["services_coffee_gallery"];
    $services_coffee_gallery_old = $data['services_coffee_gallery_old'];


    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $services->services_coffee_gallery = checkToUploadGoogleDrive(
      $services->services_coffee_gallery, // FILES
      $services_coffee_gallery_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $services->services_coffee_gallery = checkDeleteGoogleDriveApiFiles(
      $services->services_coffee_gallery, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdateCoffeeGallery($services);
    returnSuccess($services, "services", $query);
  }
  if ($isUpdateServices == "coffeeUpdate") {
    $services->services_aid = $_GET['servicesid'];
    $services->services_coffee_title = $data["services_coffee_title"];
    $services->services_coffee_description = $data["services_coffee_description"];
    $services->services_product_a = $data["services_product_a"];
    $services->services_product_b = $data["services_product_b"];
    $services->services_product_c = $data["services_product_c"];
    $services->services_product_description_a = $data["services_product_description_a"];
    $services->services_product_description_b = $data["services_product_description_b"];
    $services->services_product_description_c = $data["services_product_description_c"];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    // update
    $query = checkUpdateCoffeeServices($services);
    returnSuccess($services, "services", $query);
  }
  if ($isUpdateServices == "coffeeButtonUpdate") {
    $services->services_aid = $_GET['servicesid'];
    $services->services_coffee_button_a = $data["services_coffee_button_a"];
    $services->services_coffee_button_b = $data["services_coffee_button_b"];
    $services->services_coffee_facebook_link = $data["services_coffee_facebook_link"];
    $services->services_coffee_menu_images = $data["services_coffee_menu_images"];
    $services_coffee_menu_images_old = $data['services_coffee_menu_images_old'];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $services->services_coffee_menu_images = checkToUploadGoogleDrive(
      $services->services_coffee_menu_images, // FILES
      $services_coffee_menu_images_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $services->services_coffee_menu_images = checkDeleteGoogleDriveApiFiles(
      $services->services_coffee_menu_images, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );
    // update
    $query = checkUpdateCoffeeButton($services);
    returnSuccess($services, "services", $query);
  }
  if ($isUpdateServices == "salonImgUpdate") {
    $services->services_aid = $_GET['servicesid'];
    $services->services_salon_img = $data["services_salon_img"];
    $services_salon_img_old = $data['services_salon_img_old'];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $services->services_salon_img = checkToUploadGoogleDrive(
      $services->services_salon_img, // FILES
      $services_salon_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $services->services_salon_img = checkDeleteGoogleDriveApiFiles(
      $services->services_salon_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdateSalonImg($services);
    returnSuccess($services, "services", $query);
  }
  if ($isUpdateServices == "salonGalleryUpdate") {
    $services->services_aid = $_GET['servicesid'];
    $services->services_salon_gallery = $data["services_salon_gallery"];
    $services_salon_gallery_old = $data['services_salon_gallery_old'];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $services->services_salon_gallery = checkToUploadGoogleDrive(
      $services->services_salon_gallery, // FILES
      $services_salon_gallery_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $services->services_salon_gallery = checkDeleteGoogleDriveApiFiles(
      $services->services_salon_gallery, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdateSalonGallery($services);
    returnSuccess($services, "services", $query);
  }
  if ($isUpdateServices == "salonUpdate") {
    $services->services_aid = $_GET['servicesid'];
    $services->services_salon_title = $data["services_salon_title"];
    $services->services_salon_description_a = $data["services_salon_description_a"];
    $services->services_salon_description_b = $data["services_salon_description_b"];
    $services->services_contact = $data["services_contact"];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    // update
    $query = checkUpdateSalonContents($services);
    returnSuccess($services, "services", $query);
  }
  if ($isUpdateServices == "salonButtonUpdate") {
    $services->services_aid = $_GET['servicesid'];
    $services->services_salon_button_a = $data["services_salon_button_a"];
    $services->services_salon_button_b = $data["services_salon_button_b"];
    $services->services_salon_facebook_link = $data["services_salon_facebook_link"];
    $services->services_salon_services_images = $data["services_salon_services_images"];
    $services_salon_services_images_old = $data['services_salon_services_images_old'];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $services->services_salon_services_images = checkToUploadGoogleDrive(
      $services->services_salon_services_images, // FILES
      $services_salon_services_images_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $services->services_salon_services_images = checkDeleteGoogleDriveApiFiles(
      $services->services_salon_services_images, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdateSalonButton($services);
    returnSuccess($services, "services", $query);
  }
}

// return 404 error if endpoint not available
checkEndpoint();
