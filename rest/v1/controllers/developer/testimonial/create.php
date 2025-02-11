<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$testimonial = new Testimonial($conn);
// get should not be present

// check data
checkPayload($data);
// get data

// Get the type of create action (logo, navigation, banner)
$isUpdateTestimonial = $data['isUpdateTestimonial'] ?? '';

// Set common fields
$testimonial->testimonial_datetime = date("Y-m-d H:i:s");

if ($isUpdateTestimonial == "testimonialTitleUpdate") {
    $testimonial->testimonial_title = $data["testimonial_title"];
    $testimonial->testimonial_subtitle = $data["testimonial_subtitle"];
    $query = checkCreate($testimonial);
}
if ($isUpdateTestimonial == "testimonialAUpdate") {
    $testimonial->testimonial_client_img_a = $data["testimonial_client_img_a"];
    $testimonial->testimonial_client_name_a = $data["testimonial_client_name_a"];
    $testimonial->testimonial_client_message_a = $data["testimonial_client_message_a"];

    $testimonial_client_img_a_old = $data['testimonial_client_img_a_old'];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $services->testimonial_client_img_a = checkToUploadGoogleDrive(
        $services->testimonial_client_img_a, // FILES
        $testimonial_client_img_a_old, // OLD FILES
    );

    $query = checkCreateTestimonialA($testimonial);
}
if ($isUpdateTestimonial == "testimonialBUpdate") {
    $testimonial->testimonial_client_img_b = $data["testimonial_client_img_b"];
    $testimonial->testimonial_client_name_b = $data["testimonial_client_name_b"];
    $testimonial->testimonial_client_message_b = $data["testimonial_client_message_b"];

    $testimonial_client_img_b_old = $data['testimonial_client_img_b_old'];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $services->testimonial_client_img_b = checkToUploadGoogleDrive(
        $services->testimonial_client_img_b, // FILES
        $testimonial_client_img_b_old, // OLD FILES
    );

    $query = checkCreateTestimonialB($testimonial);
}
if ($isUpdateTestimonial == "testimonialCUpdate") {
    $testimonial->testimonial_client_img_c = $data["testimonial_client_img_c"];
    $testimonial->testimonial_client_name_c = $data["testimonial_client_name_c"];
    $testimonial->testimonial_client_message_c = $data["testimonial_client_message_c"];

    $testimonial_client_img_b_old = $data['testimonial_client_img_b_old'];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $services->testimonial_client_img_c = checkToUploadGoogleDrive(
        $services->testimonial_client_img_c, // FILES
        $testimonial_client_img_c_old, // OLD FILES
    );

    $query = checkCreateTestimonialC($testimonial);
}


// Return response
returnSuccess($testimonial, "testimonial", $query);

// Return 404 error if endpoint not available
checkEndpoint();
