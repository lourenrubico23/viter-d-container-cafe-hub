<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$services = new Services($conn);
// get should not be present

// check data
checkPayload($data);
// get data

// Get the type of create action (logo, navigation, banner)
$isUpdateServices = $data['isUpdateServices'] ?? '';

// Set common fields
$services->services_datetime = date("Y-m-d H:i:s");

if ($isUpdateServices == "coffeeImgUpdate") {
    $services->services_coffee_img = $data["services_coffee_img"];
    $services->services_datetime = date("Y-m-d H:i:s");

    $services_coffee_img_old = $data['services_coffee_img_old'];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $services->services_coffee_img = checkToUploadGoogleDrive(
        $services->services_coffee_img, // FILES
        $services_coffee_img_old, // OLD FILES
    );
    $query = checkCreate($services);
}
if ($isUpdateServices == "coffeeGalleryUpdate") {
    $services->services_coffee_gallery = $data["services_coffee_gallery"];
    $services->services_datetime = date("Y-m-d H:i:s");

    $services_coffee_gallery_old = $data['services_coffee_gallery_old'];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $services->services_coffee_gallery = checkToUploadGoogleDrive(
        $services->services_coffee_gallery, // FILES
        $services_coffee_gallery_old, // OLD FILES
    );
    $query = checkCreateCoffeeGallery($services);
}
if ($isUpdateServices == "coffeeUpdate") {
    $services->services_coffee_title = $data["services_coffee_title"];
    $services->services_coffee_description = $data["services_coffee_description"];
    $services->services_product_a = $data["services_product_a"];
    $services->services_product_b = $data["services_product_b"];
    $services->services_product_c = $data["services_product_c"];
    $services->services_product_description_a = $data["services_product_description_a"];
    $services->services_product_description_b = $data["services_product_description_b"];
    $services->services_product_description_c = $data["services_product_description_c"];

    $services->services_datetime = date("Y-m-d H:i:s");
    $query = checkCreateCoffeeServices($services);
}
if ($isUpdateServices == "coffeeButtonUpdate") {
    $services->services_coffee_button_a = $data["services_coffee_button_a"];
    $services->services_coffee_button_b = $data["services_coffee_button_b"];
    $services->services_coffee_facebook_link = $data["services_coffee_facebook_link"];
    $services->services_coffee_menu_images = $data["services_coffee_menu_images"];
    $services->services_datetime = date("Y-m-d H:i:s");

    $services_coffee_menu_images_old = $data['services_coffee_menu_images_old'];
    // UPLOAD FILE TO GOOGLE DRIVE  
    $services->services_coffee_menu_images = checkToUploadGoogleDrive(
        $services->services_coffee_menu_images, // FILES
        $services_coffee_menu_images_old, // OLD FILES
    );
    $query = checkCreateCoffeeButton($services);
}

if ($isUpdateServices == "salonImgUpdate") {
    $services->services_salon_img = $data["services_salon_img"];
    $services->services_datetime = date("Y-m-d H:i:s");

    $services_salon_img_old = $data['services_salon_img_old'];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $services->services_salon_img = checkToUploadGoogleDrive(
        $services->services_salon_img, // FILES
        $services_salon_img_old, // OLD FILES
    );

    $query = checkCreateSalonImg($services);
}
if ($isUpdateServices == "salonGalleryUpdate") {
    $services->services_salon_gallery = $data["services_salon_gallery"];
    $services->services_datetime = date("Y-m-d H:i:s");

    $services_salon_gallery_old = $data['services_salon_gallery_old'];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $services->services_salon_gallery = checkToUploadGoogleDrive(
        $services->services_salon_gallery, // FILES
        $services_salon_gallery_old, // OLD FILES
    );
    $query = checkCreateSalonGallery($services);
}
if ($isUpdateServices == "salonUpdate") {
    $services->services_salon_title = $data["services_salon_title"];
    $services->services_salon_description_a = $data["services_salon_description_a"];
    $services->services_salon_description_b = $data["services_salon_description_b"];
    $services->services_contact = $data["services_contact"];
    $services->services_datetime = date("Y-m-d H:i:s");

    $query = checkCreateSalonContents($services);
}
if ($isUpdateServices == "salonButtonUpdate") {
    $services->services_salon_button_a = $data["services_salon_button_a"];
    $services->services_salon_button_b = $data["services_salon_button_b"];
    $services->services_salon_facebook_link = $data["services_salon_facebook_link"];
    $services->services_salon_services_images = $data["services_salon_services_images"];
    $services->services_datetime = date("Y-m-d H:i:s");

    $services_salon_services_images_old = $data['services_salon_services_images_old'];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $services->services_salon_services_images = checkToUploadGoogleDrive(
        $services->services_salon_services_images, // FILES
        $services_salon_services_images_old, // OLD FILES
    );
    $query = checkCreateSalonButton($services);
}


// Return response
returnSuccess($services, "services", $query);

// Return 404 error if endpoint not available
checkEndpoint();
