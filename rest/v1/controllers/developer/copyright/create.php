<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$copyright = new Copyright($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$isUpdateCopyright = $data['isUpdateCopyright'] ?? '';

$copyright->copyright_datetime = date("Y-m-d H:i:s");

if ($isUpdateCopyright == "copyrightUpdate") {
    $copyright->copyright_title = $data["copyright_title"];
    $query = checkCreate($copyright);
}

// Return response
returnSuccess($copyright, "copyright", $query);

// Return 404 error if endpoint not available
checkEndpoint();
