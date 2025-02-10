<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$contact_us = new ContactUs($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$isUpdateContactUs = $data['isUpdateContactUs'] ?? '';

$contact_us->contact_us_datetime = date("Y-m-d H:i:s");

if ($isUpdateContactUs == "contactUsUpdate") {
    $contact_us->contact_us_description = $data["contact_us_description"];
    $contact_us->contact_us_button = $data["contact_us_button"];
    $query = checkCreate($contact_us);
}
if ($isUpdateContactUs == "formTitleUpdate") {
    $contact_us->contact_us_form_title = $data["contact_us_form_title"];
    $query = checkCreateFormTitle($contact_us);
}


// Return response
returnSuccess($contact_us, "contactUs", $query);

// Return 404 error if endpoint not available
checkEndpoint();
