<?php


// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$header = new Header($conn);

if (array_key_exists('headerid', $_GET)) {
    checkPayload($data);

    $filesToDelete = $data['filesToDelete'];
    // $header->header_aid = $_GET['headerid'];
    // // Get the type of create action (logo, navigation, banner)
    // $isUpdateHeader = $data['isUpdateHeader'] ?? '';

    // // Set common fields
    // $header->header_datetime = date("Y-m-d H:i:s");


    // if ($isUpdateHeader == "logoUpdate") {
    //     $header->header_logo_img = $data["header_logo_img"];
    // }
    // if ($isUpdateHeader == "navigationUpdate") {
    //     $header->header_nav_a = $data["header_nav_a"];
    //     $header->header_nav_b = $data["header_nav_b"];
    //     $header->header_nav_c = $data["header_nav_c"];
    //     $header->header_nav_d = $data["header_nav_d"];
    // }
    // if ($isUpdateHeader == "bannerUpdate") {
    //     $header->header_banner_img = $data["header_banner_img"];
    //     $header->header_banner_title = $data["header_banner_title"];
    //     $header->header_button_text = $data["header_button_text"];
    //     $header_banner_img_old = $data['header_banner_img_old'];
    // }

    // checkId($header->header_aid);
    // $query = checkDelete($header);

    // TO DELETE ALL FILES IN GOOGLE DRIVE API
    // returnError($jsonStringToArray);
    if ($filesToDelete != '') {
        $jsonStringToArray = (array)json_decode($filesToDelete);
        $pendingDeleteFile = array_map(function ($item) {
            return json_encode($item, true);
        }, $jsonStringToArray);
        checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
    }

    returnSuccess($header, 'header', $query);
}


checkEndpoint();
