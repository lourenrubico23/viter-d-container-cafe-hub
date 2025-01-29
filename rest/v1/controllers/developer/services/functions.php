<?php

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
