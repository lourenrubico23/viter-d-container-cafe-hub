<?php


// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$testimonial = new Testimonial($conn);

if (array_key_exists('testimonialid', $_GET)) {
    checkPayload($data);

    $filesToDelete = $data['filesToDelete'];

    // TO DELETE ALL FILES IN GOOGLE DRIVE API
    // returnError($jsonStringToArray);
    if ($filesToDelete != '') {
        $jsonStringToArray = (array)json_decode($filesToDelete);
        $pendingDeleteFile = array_map(function ($item) {
            return json_encode($item, true);
        }, $jsonStringToArray);
        checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
    }

    returnSuccess($testimonial, 'testimonial', $query);
}


checkEndpoint();
