<?php


// Create From Title
function checkCreateFormTitle($object)
{
    $query = $object->createFormTitle();
    checkQuery($query, "There's a problem processing your request. (create form title)");
    return $query;
}


// Update Form Title
function checkUpdateFormTitle($object)
{
    $query = $object->updateFormTitle();
    checkQuery($query, "There's a problem processing your request. (update form title)");
    return $query;
}
