<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$header = new Header($conn);
// get should not be present

// check data
checkPayload($data);
// get data

// Get the type of create action (logo, navigation, banner)
$isUpdateHeader = $data['isUpdateHeader'] ?? '';

// Set common fields
$header->header_datetime = date("Y-m-d H:i:s");

if ($isUpdateHeader == "logoUpdate") {
    $header->header_logo_img = $data["header_logo_img"];
    $query = checkCreate($header);
}
if ($isUpdateHeader == "navigationUpdate") {
    $header->header_nav_a = $data["header_nav_a"];
    $header->header_nav_b = $data["header_nav_b"];
    $header->header_nav_c = $data["header_nav_c"];
    $header->header_nav_d = $data["header_nav_d"];
    $query = checkCreateNavigation($header);
}
if ($isUpdateHeader == "bannerUpdate") {
    $header->header_banner_img = $data["header_banner_img"];
    $header->header_banner_title = $data["header_banner_title"];
    $header->header_button_text = $data["header_button_text"];
    $query = checkCreateBanner($header);
}

// Return response
returnSuccess($header, "header", $query);

// Return 404 error if endpoint not available
checkEndpoint();
