<?php


// Create Navigation
function checkCreateNavigation($object)
{
    $query = $object->createNavigation();
    checkQuery($query, "There's a problem processing your request. (create navigation)");
    return $query;
}

// Create Banner
function checkCreateBanner($object)
{
    $query = $object->createBanner();
    checkQuery($query, "There's a problem processing your request. (create banner)");
    return $query;
}

// Update Navigation
function checkUpdateNavigation($object)
{
    $query = $object->updateNavigation();
    checkQuery($query, "There's a problem processing your request. (update navigation)");
    return $query;
}

// Update Banner
function checkUpdateBanner($object)
{
    $query = $object->updateBanner();
    checkQuery($query, "There's a problem processing your request. (update banner)");
    return $query;
}
