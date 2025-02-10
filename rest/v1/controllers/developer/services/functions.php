<?php

// create Coffee services
function checkCreateCoffeeServices($object)
{
    $query = $object->createCoffeeServices();
    checkQuery($query, "There's a problem processing your request. (create coffee services)");
    return $query;
}

// create Coffee Button
function checkCreateCoffeeButton($object)
{
    $query = $object->createCoffeeButton();
    checkQuery($query, "There's a problem processing your request. (create coffee button)");
    return $query;
}

// create Coffee Menu
function checkCreateCoffeeMenu($object)
{
    $query = $object->createCoffeeMenu();
    checkQuery($query, "There's a problem processing your request. (create coffee menu)");
    return $query;
}

// create Salon Image
function checkCreateCoffeeGallery($object)
{
    $query = $object->createCoffeeGallery();
    checkQuery($query, "There's a problem processing your request. (create coffee gallery)");
    return $query;
}

// create Salon Image
function checkCreateSalonImg($object)
{
    $query = $object->createSalonImg();
    checkQuery($query, "There's a problem processing your request. (create salon image)");
    return $query;
}

// create Salon Gallery
function checkCreateSalonGallery($object)
{
    $query = $object->createSalonGallery();
    checkQuery($query, "There's a problem processing your request. (create salon gallery)");
    return $query;
}

// create Salon Contents
function checkCreateSalonContents($object)
{
    $query = $object->createSalonContents();
    checkQuery($query, "There's a problem processing your request. (create salon contents)");
    return $query;
}

// create Salon Button
function checkCreateSalonButton($object)
{
    $query = $object->createSalonButton();
    checkQuery($query, "There's a problem processing your request. (create salon button)");
    return $query;
}

// create Salon Services
function checkCreateSalonServices($object)
{
    $query = $object->createSalonServices();
    checkQuery($query, "There's a problem processing your request. (create salon services)");
    return $query;
}

// Update Coffee services
function checkUpdateCoffeeServices($object)
{
    $query = $object->updateCoffeeServices();
    checkQuery($query, "There's a problem processing your request. (update coffee services)");
    return $query;
}

// Update Coffee button
function checkUpdateCoffeeButton($object)
{
    $query = $object->updateCoffeeButton();
    checkQuery($query, "There's a problem processing your request. (update coffee button)");
    return $query;
}

// Update Coffee Menu
function checkUpdateCoffeeMenu($object)
{
    $query = $object->updateCoffeeMenu();
    checkQuery($query, "There's a problem processing your request. (update coffee menu)");
    return $query;
}

// Update Coffee gallery
function checkUpdateCoffeeGallery($object)
{
    $query = $object->updateCoffeeGallery();
    checkQuery($query, "There's a problem processing your request. (update coffee gallery)");
    return $query;
}

// Update Salon image
function checkUpdateSalonImg($object)
{
    $query = $object->updateSalonImg();
    checkQuery($query, "There's a problem processing your request. (update salon image)");
    return $query;
}

// Update Salon gallery
function checkUpdateSalonGallery($object)
{
    $query = $object->updateSalonGallery();
    checkQuery($query, "There's a problem processing your request. (update salon gallery)");
    return $query;
}

// Update Salon contents
function checkUpdateSalonContents($object)
{
    $query = $object->updateSalonContents();
    checkQuery($query, "There's a problem processing your request. (update salon contents)");
    return $query;
}

// Update Salon button
function checkUpdateSalonButton($object)
{
    $query = $object->updateSalonButton();
    checkQuery($query, "There's a problem processing your request. (update salon button)");
    return $query;
}

// Update Salon services
function checkUpdateSalonServices($object)
{
    $query = $object->updateSalonServices();
    checkQuery($query, "There's a problem processing your request. (update salon services)");
    return $query;
}
