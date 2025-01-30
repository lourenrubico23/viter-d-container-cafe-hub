<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$about = new About($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateAbout = $data['isUpdateAbout'] ?? '';
if ($isUpdateAbout == "aboutUpdate") {
    $about->about_img = $data["about_img"];
    $about->about_description_a = $data["about_description_a"];
    $about->about_description_b = $data["about_description_b"];
    $about->about_description_c = $data["about_description_c"];
    $about->about_datetime = date("Y-m-d H:i:s");
    $query = checkCreate($about);
    returnSuccess($about, "about", $query);
}


// Return 404 error if endpoint not available
checkEndpoint();
