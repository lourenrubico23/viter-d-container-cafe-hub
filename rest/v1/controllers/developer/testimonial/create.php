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
    $query = checkCreateTestimonialA($testimonial);
}
if ($isUpdateTestimonial == "testimonialBUpdate") {
    $testimonial->testimonial_client_img_b = $data["testimonial_client_img_b"];
    $testimonial->testimonial_client_name_b = $data["testimonial_client_name_b"];
    $testimonial->testimonial_client_message_b = $data["testimonial_client_message_b"];
    $query = checkCreateTestimonialB($testimonial);
}
if ($isUpdateTestimonial == "testimonialCUpdate") {
    $testimonial->testimonial_client_img_c = $data["testimonial_client_img_c"];
    $testimonial->testimonial_client_name_c = $data["testimonial_client_name_c"];
    $testimonial->testimonial_client_message_c = $data["testimonial_client_message_c"];
    $query = checkCreateTestimonialC($testimonial);
}


// Return response
returnSuccess($testimonial, "testimonial", $query);

// Return 404 error if endpoint not available
checkEndpoint();
