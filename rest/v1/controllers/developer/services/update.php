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

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    // update
    $query = checkUpdate($services);
    returnSuccess($services, "services", $query);
  }
  if ($isUpdateServices == "coffeeGalleryUpdate") {
    $services->services_aid = $_GET['servicesid'];
    $services->services_coffee_gallery = $data["services_coffee_gallery"];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
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
  if ($isUpdateServices == "salonImgUpdate") {
    $services->services_aid = $_GET['servicesid'];
    $services->services_salon_img = $data["services_salon_img"];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    // update
    $query = checkUpdateSalonImg($services);
    returnSuccess($services, "services", $query);
  }
  if ($isUpdateServices == "salonGalleryUpdate") {
    $services->services_aid = $_GET['servicesid'];
    $services->services_salon_gallery = $data["services_salon_gallery"];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
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
}

// return 404 error if endpoint not available
checkEndpoint();
