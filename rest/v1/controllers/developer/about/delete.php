<?php


// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$about = new About($conn);

if (array_key_exists('aboutid', $_GET)) {
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

    returnSuccess($about, 'about', $query);
}


checkEndpoint();
