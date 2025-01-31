<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$reach_us = new ReachUs($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$isUpdateReachUs = $data['isUpdateReachUs'] ?? '';

$reach_us->reach_us_datetime = date("Y-m-d H:i:s");

if ($isUpdateReachUs == "reachUsUpdate") {
    $reach_us->reach_us_title = $data["reach_us_title"];
    $reach_us->reach_us_address = $data["reach_us_address"];
    $reach_us->reach_us_facebook = $data["reach_us_facebook"];
    $reach_us->reach_us_instagram = $data["reach_us_instagram"];
    $reach_us->reach_us_map_link = $data["reach_us_map_link"];
    $reach_us->reach_us_button = $data["reach_us_button"];
    $query = checkCreate($reach_us);
}


// Return response
returnSuccess($reach_us, "reachUs", $query);

// Return 404 error if endpoint not available
checkEndpoint();
