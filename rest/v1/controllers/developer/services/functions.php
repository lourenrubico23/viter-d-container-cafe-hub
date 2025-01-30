<?php

// create Coffee services
function checkCreateCoffeeServices($object)
{
    $query = $object->createCoffeeServices();
    checkQuery($query, "There's a problem processing your request. (create coffee services)");
    return $query;
}

// create Salon Image
function checkCreateSalonImg($object)
{
    $query = $object->createSalonImg();
    checkQuery($query, "There's a problem processing your request. (create salon image)");
    return $query;
}

// create Salon Contents
function checkCreateSalonContents($object)
{
    $query = $object->createSalonContents();
    checkQuery($query, "There's a problem processing your request. (create salon contents)");
    return $query;
}

// Update Coffee services
function checkUpdateCoffeeServices($object)
{
    $query = $object->updateCoffeeServices();
    checkQuery($query, "There's a problem processing your request. (update coffee services)");
    return $query;
}

// Update Salon image
function checkUpdateSalonImg($object)
{
    $query = $object->updateSalonImg();
    checkQuery($query, "There's a problem processing your request. (update salon image)");
    return $query;
}

// Update Salon contents
function checkUpdateSalonContents($object)
{
    $query = $object->updateSalonContents();
    checkQuery($query, "There's a problem processing your request. (update salon contents)");
    return $query;
}
