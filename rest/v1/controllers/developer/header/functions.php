<?php


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
