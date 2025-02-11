<?php


// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$services = new Services($conn);

if (array_key_exists('servicesid', $_GET)) {
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

    returnSuccess($services, 'services', $query);
}


checkEndpoint();
