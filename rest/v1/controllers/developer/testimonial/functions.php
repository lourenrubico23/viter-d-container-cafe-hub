<?php


// Create Testimonial A
function checkCreateTestimonialA($object)
{
    $query = $object->createTestimonialA();
    checkQuery($query, "There's a problem processing your request. (create testimonial a)");
    return $query;
}

// Create Testimonial B
function checkCreateTestimonialB($object)
{
    $query = $object->createTestimonialB();
    checkQuery($query, "There's a problem processing your request. (create testimonial b)");
    return $query;
}

// Create Testimonial C
function checkCreateTestimonialC($object)
{
    $query = $object->createTestimonialC();
    checkQuery($query, "There's a problem processing your request. (create testimonial c)");
    return $query;
}

// Update Testimonial A
function checkUpdateTestimonialA($object)
{
    $query = $object->updateTestimonialA();
    checkQuery($query, "There's a problem processing your request. (update testimonial a)");
    return $query;
}

// Update Testimonial B
function checkUpdateTestimonialB($object)
{
    $query = $object->updateTestimonialB();
    checkQuery($query, "There's a problem processing your request. (update testimonial b)");
    return $query;
}

// Update Testimonial C
function checkUpdateTestimonialC($object)
{
    $query = $object->updateTestimonialC();
    checkQuery($query, "There's a problem processing your request. (update testimonial c)");
    return $query;
}
