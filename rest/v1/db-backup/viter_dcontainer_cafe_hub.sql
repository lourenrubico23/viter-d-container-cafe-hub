-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2025 at 08:54 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `viter_dcontainer_cafe_hub`
--

-- --------------------------------------------------------

--
-- Table structure for table `dcchv1_about`
--

CREATE TABLE `dcchv1_about` (
  `about_aid` int(11) NOT NULL,
  `about_img` text NOT NULL,
  `about_description_a` text NOT NULL,
  `about_description_b` text NOT NULL,
  `about_description_c` text NOT NULL,
  `about_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dcchv1_about`
--

INSERT INTO `dcchv1_about` (`about_aid`, `about_img`, `about_description_a`, `about_description_b`, `about_description_c`, `about_datetime`) VALUES
(1, '[{\"name\":\"logo-brown.webp\",\"id\":\"1Gp1NQoQ9XAF8jQZNMI7CJVQuJEZQqMWB\",\"datetime\":\"2025-02-11 15:07:54\"},{\"name\":\"spa-logo.png\",\"id\":\"1vYqeb-Cm6ID8Lup104zXpBivUCDqVmpk\",\"datetime\":\"2025-02-11 15:07:57\"}]', 'D’ Container Cafe Hub is a one stop shop from coffee, food, drinks to relaxing facial, massage salon spa in one. We started conceptualizing this place last March 2024 and finally open its doors last October 18, 2024. ', 'Our goal is to serve quality and satisfying food while relaxing and pampering yourself in one place.', 'Serving extraordinary food to satisfy your palate.', '2025-02-11 15:10:51');

-- --------------------------------------------------------

--
-- Table structure for table `dcchv1_colors`
--

CREATE TABLE `dcchv1_colors` (
  `colors_aid` int(11) NOT NULL,
  `colors_primary` varchar(50) NOT NULL,
  `colors_secondary` varchar(50) NOT NULL,
  `colors_accent` varchar(50) NOT NULL,
  `colors_light` varchar(50) NOT NULL,
  `colors_dark` varchar(50) NOT NULL,
  `colors_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dcchv1_colors`
--

INSERT INTO `dcchv1_colors` (`colors_aid`, `colors_primary`, `colors_secondary`, `colors_accent`, `colors_light`, `colors_dark`, `colors_datetime`) VALUES
(3, '#983b00', '#390700', '#bc7b75', '#faf7f2', '#c2c2c2', '2025-02-11 08:41:09');

-- --------------------------------------------------------

--
-- Table structure for table `dcchv1_contact_us`
--

CREATE TABLE `dcchv1_contact_us` (
  `contact_us_aid` int(11) NOT NULL,
  `contact_us_description` text NOT NULL,
  `contact_us_button` varchar(100) NOT NULL,
  `contact_us_form_title` varchar(100) NOT NULL,
  `contact_us_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dcchv1_contact_us`
--

INSERT INTO `dcchv1_contact_us` (`contact_us_aid`, `contact_us_description`, `contact_us_button`, `contact_us_form_title`, `contact_us_datetime`) VALUES
(1, 'If you’re craving a relaxing escape where you can savor every sip of your coffee in peace, look no further. Your perfect moment awaits—why wait to indulge?', 'Contact Us', 'Get In Touch', '2025-02-11 10:27:24');

-- --------------------------------------------------------

--
-- Table structure for table `dcchv1_copyright`
--

CREATE TABLE `dcchv1_copyright` (
  `copyright_aid` int(11) NOT NULL,
  `copyright_title` varchar(100) NOT NULL,
  `copyright_datetime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dcchv1_copyright`
--

INSERT INTO `dcchv1_copyright` (`copyright_aid`, `copyright_title`, `copyright_datetime`) VALUES
(1, 'D\'ContainerHub', 2025);

-- --------------------------------------------------------

--
-- Table structure for table `dcchv1_header`
--

CREATE TABLE `dcchv1_header` (
  `header_aid` int(11) NOT NULL,
  `header_logo_img` text NOT NULL,
  `header_banner_img` text NOT NULL,
  `header_nav_a` varchar(50) NOT NULL,
  `header_nav_b` varchar(50) NOT NULL,
  `header_nav_c` varchar(50) NOT NULL,
  `header_nav_d` varchar(50) NOT NULL,
  `header_banner_title` varchar(250) NOT NULL,
  `header_button_text` varchar(100) NOT NULL,
  `header_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dcchv1_header`
--

INSERT INTO `dcchv1_header` (`header_aid`, `header_logo_img`, `header_banner_img`, `header_nav_a`, `header_nav_b`, `header_nav_c`, `header_nav_d`, `header_banner_title`, `header_button_text`, `header_datetime`) VALUES
(2, '[{\"name\":\"logo.png\",\"id\":\"19gyKQHFK3xsKEDIgpWpEcCk_NBlqLkZ6\",\"datetime\":\"2025-02-11 14:11:01\"}]', '[{\"name\":\"bannerImage.webp\",\"id\":\"1n2NKcAK5TL0mlSaKhPzFLwio8kXPaQ6Z\",\"datetime\":\"2025-02-11 13:54:20\"}]', 'About', 'Coffee', 'Spa Salon', 'Reach Us', 'Indulge in delicious, high-quality food while unwinding and treating yourself—all in one perfect destination.', 'See Where We At', '2025-02-11 15:11:56');

-- --------------------------------------------------------

--
-- Table structure for table `dcchv1_reach_us`
--

CREATE TABLE `dcchv1_reach_us` (
  `reach_us_aid` int(11) NOT NULL,
  `reach_us_title` varchar(100) NOT NULL,
  `reach_us_address` varchar(200) NOT NULL,
  `reach_us_facebook` varchar(200) NOT NULL,
  `reach_us_instagram` varchar(200) NOT NULL,
  `reach_us_map_link` text NOT NULL,
  `reach_us_button` text NOT NULL,
  `reach_us_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dcchv1_reach_us`
--

INSERT INTO `dcchv1_reach_us` (`reach_us_aid`, `reach_us_title`, `reach_us_address`, `reach_us_facebook`, `reach_us_instagram`, `reach_us_map_link`, `reach_us_button`, `reach_us_datetime`) VALUES
(1, 'D Container Cafe Hub Exquisite Salon Spa ', 'Blk 4 lot 2 Anne Martins Subdivision Brgy. San Miguel Alaminos Laguna', 'D Container Cafe Hub ExquiSite Salon Spa & Esthetics ', 'D Container Cafe Hub ExquiSite Salon Spa & Esthetics ', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.640442131787!2d121.2459161!3d14.0598172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6900286aaa39%3A0xb75fae24b925907a!2sD\'Container%20Cafe%20Hub!5e0!3m2!1sen!2sph!4v1694518739393!5m2!1sen!2sph', 'Inquire Now', '2025-02-11 10:27:49');

-- --------------------------------------------------------

--
-- Table structure for table `dcchv1_services`
--

CREATE TABLE `dcchv1_services` (
  `services_aid` int(11) NOT NULL,
  `services_coffee_img` text NOT NULL,
  `services_coffee_gallery` text NOT NULL,
  `services_coffee_title` varchar(200) NOT NULL,
  `services_coffee_description` text NOT NULL,
  `services_product_a` text NOT NULL,
  `services_product_b` text NOT NULL,
  `services_product_c` text NOT NULL,
  `services_product_description_a` text NOT NULL,
  `services_product_description_b` text NOT NULL,
  `services_product_description_c` text NOT NULL,
  `services_salon_title` varchar(200) NOT NULL,
  `services_salon_img` text NOT NULL,
  `services_salon_gallery` text NOT NULL,
  `services_salon_description_a` text NOT NULL,
  `services_salon_description_b` text NOT NULL,
  `services_contact` varchar(50) NOT NULL,
  `services_coffee_button_a` varchar(100) NOT NULL,
  `services_coffee_button_b` varchar(100) NOT NULL,
  `services_coffee_facebook_link` text NOT NULL,
  `services_coffee_menu_images` text NOT NULL,
  `services_salon_button_a` varchar(100) NOT NULL,
  `services_salon_button_b` varchar(100) NOT NULL,
  `services_salon_facebook_link` text NOT NULL,
  `services_salon_services_images` text NOT NULL,
  `services_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dcchv1_services`
--

INSERT INTO `dcchv1_services` (`services_aid`, `services_coffee_img`, `services_coffee_gallery`, `services_coffee_title`, `services_coffee_description`, `services_product_a`, `services_product_b`, `services_product_c`, `services_product_description_a`, `services_product_description_b`, `services_product_description_c`, `services_salon_title`, `services_salon_img`, `services_salon_gallery`, `services_salon_description_a`, `services_salon_description_b`, `services_contact`, `services_coffee_button_a`, `services_coffee_button_b`, `services_coffee_facebook_link`, `services_coffee_menu_images`, `services_salon_button_a`, `services_salon_button_b`, `services_salon_facebook_link`, `services_salon_services_images`, `services_datetime`) VALUES
(1, '[{\"name\":\"services-img-1.webp\",\"id\":\"1n47uXemdbi7kXXLh8brBrz_BK7d_wErm\",\"datetime\":\"2025-02-11 15:33:44\"}]', 'coffee-1.webp, coffee-2.webp, coffee-3.webp, coffee-4.webp, coffee-5.webp, coffee-6.webp, coffee-7.webp, coffee-8.webp, coffee-9.webp, coffee-10.webp, coffee-11.webp, coffee-12.webp', 'Our Coffee', ' Our coffee is more than just a drink; it’s an experience.\n                      Sourced from the finest beans, expertly roasted to\n                      perfection, and brewed with care, every cup delivers rich\n                      flavors and an irresistible aroma. Whether you’re\n                      kick-starting your morning or enjoying a relaxing break,\n                      our coffee offers the perfect balance of quality, warmth,\n                      and satisfaction. From bold espressos to creamy lattes,\n                      every sip is crafted to delight your senses and elevate\n                      your day.', 'Boosts Energy and Focus:', 'Rich in Antioxidants:', 'Enhances Social Connections:', 'Coffee provides a natural energy lift, helping you\n                          stay alert and focused throughout your day.', ' Packed with antioxidants, coffee can support your\n                          overall health by combating harmful free radicals.', ' Whether shared with friends or enjoyed during a quiet\n                          moment, coffee fosters connection and relaxation in\n                          everyday life.', 'Spa Salon', 'services-img-2.webp', 'salon-1.webp, salon-2.webp, salon-3.webp, salon-4.webp, salon-5.webp, salon-6.webp, salon-7.webp, salon-8.webp, salon-9.webp, salon-10.webp', 'Escape to our spa salon, where relaxation meets\n                      rejuvenation. Immerse yourself in a tranquil atmosphere\n                      designed to soothe your senses and refresh your spirit.\n                      From luxurious massages and revitalizing facials to\n                      expertly curated treatments, our skilled professionals are\n                      dedicated to helping you look and feel your best. Whether\n                      you\'re seeking a moment of calm or a complete\n                      transformation, our spa salon is your sanctuary for\n                      wellness and beauty.', 'Step into our hair salon and discover the perfect blend of\n                      style and expertise. Our talented stylists are passionate\n                      about creating looks that complement your unique\n                      personality, whether it’s a fresh cut, vibrant color, or a\n                      complete makeover. Using top-quality products and the\n                      latest techniques, we ensure your hair not only looks\n                      amazing but feels healthy and radiant. From everyday chic\n                      to show-stopping glamour, our salon is your destination\n                      for confidence-boosting transformations.', '+63 915 110 1112', 'Make A Reservation', 'Menu', 'https://www.facebook.com/profile.php?id=100066976194884', '[{\"name\":\"coffee-menu-1.webp\",\"id\":\"1119JPZoTJOnKFToWEyMApbiI5e_bjU_z\",\"datetime\":\"2025-02-11 15:45:30\"},{\"name\":\"coffee-menu-2.webp\",\"id\":\"1855E4mwKnWWm3VJhgbzt37_eZzJEOIm1\",\"datetime\":\"2025-02-11 15:45:34\"},{\"name\":\"coffee-menu-3.webp\",\"id\":\"1vU6tMjiqRvKZTnbO1TwhmvCt_KlY-nOe\",\"datetime\":\"2025-02-11 15:45:37\"},{\"name\":\"coffee-menu-4.webp\",\"id\":\"1-0Tug5u2T6hcUCifkaVTLQadS5xdXZ-S\",\"datetime\":\"2025-02-11 15:45:42\"},{\"name\":\"coffee-menu-5.webp\",\"id\":\"18LIQ_nUgzMGUYtbVMOsf6Qu8i7D_8ew3\",\"datetime\":\"2025-02-11 15:45:45\"},{\"name\":\"coffee-menu-6.webp\",\"id\":\"1LuB2tace1fdf4xE2uESjkpWJHXudTobT\",\"datetime\":\"2025-02-11 15:45:49\"}]', 'Make A Reservation', 'Services', 'https://www.facebook.com/profile.php?id=100066976194884', 'salon-services-1.webp', '2025-02-11 15:45:26');

-- --------------------------------------------------------

--
-- Table structure for table `dcchv1_testimonial`
--

CREATE TABLE `dcchv1_testimonial` (
  `testimonial_aid` int(11) NOT NULL,
  `testimonial_title` varchar(100) NOT NULL,
  `testimonial_subtitle` text NOT NULL,
  `testimonial_client_img_a` varchar(200) NOT NULL,
  `testimonial_client_img_b` varchar(200) NOT NULL,
  `testimonial_client_img_c` varchar(200) NOT NULL,
  `testimonial_client_name_a` varchar(200) NOT NULL,
  `testimonial_client_name_b` varchar(200) NOT NULL,
  `testimonial_client_name_c` varchar(200) NOT NULL,
  `testimonial_client_message_a` text NOT NULL,
  `testimonial_client_message_b` text NOT NULL,
  `testimonial_client_message_c` text NOT NULL,
  `testimonial_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dcchv1_testimonial`
--

INSERT INTO `dcchv1_testimonial` (`testimonial_aid`, `testimonial_title`, `testimonial_subtitle`, `testimonial_client_img_a`, `testimonial_client_img_b`, `testimonial_client_img_c`, `testimonial_client_name_a`, `testimonial_client_name_b`, `testimonial_client_name_c`, `testimonial_client_message_a`, `testimonial_client_message_b`, `testimonial_client_message_c`, `testimonial_datetime`) VALUES
(1, 'What Our Clients Are Saying', 'subtitle', 'testimonial-1.webp', 'testimonial-2.webp', 'feedback3.webp', 'Ms. Ertha', 'Rudy Aguilar', '', 'This is more than just a café; it feels like home. It brought back the taste of my favorite arroz a la cubana, just like my loving mother used to make when she was alive and able to cook. The beef tapa and dynamite are absolutely worth trying—truly irresistible! This place isn’t just for a quick Instagram moment; it’s one you’ll want to return to time and again. You can even customize your coffee just the way you like it. Don’t miss out on the refreshing mango drink that’s sure to please your palate. Plus, it’s the NUMBER ONE pet-friendly place, which is incredibly important for dog lovers like our family. The D’ Container Cafe Hub is a must-visit experience!', 'Staffs are very friendly. Very good place. Price is reasonable. Overall, looks great. Keep it up!!!', '', '2025-02-11 10:25:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dcchv1_about`
--
ALTER TABLE `dcchv1_about`
  ADD PRIMARY KEY (`about_aid`);

--
-- Indexes for table `dcchv1_colors`
--
ALTER TABLE `dcchv1_colors`
  ADD PRIMARY KEY (`colors_aid`);

--
-- Indexes for table `dcchv1_contact_us`
--
ALTER TABLE `dcchv1_contact_us`
  ADD PRIMARY KEY (`contact_us_aid`);

--
-- Indexes for table `dcchv1_copyright`
--
ALTER TABLE `dcchv1_copyright`
  ADD PRIMARY KEY (`copyright_aid`);

--
-- Indexes for table `dcchv1_header`
--
ALTER TABLE `dcchv1_header`
  ADD PRIMARY KEY (`header_aid`);

--
-- Indexes for table `dcchv1_reach_us`
--
ALTER TABLE `dcchv1_reach_us`
  ADD PRIMARY KEY (`reach_us_aid`);

--
-- Indexes for table `dcchv1_services`
--
ALTER TABLE `dcchv1_services`
  ADD PRIMARY KEY (`services_aid`);

--
-- Indexes for table `dcchv1_testimonial`
--
ALTER TABLE `dcchv1_testimonial`
  ADD PRIMARY KEY (`testimonial_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dcchv1_about`
--
ALTER TABLE `dcchv1_about`
  MODIFY `about_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dcchv1_colors`
--
ALTER TABLE `dcchv1_colors`
  MODIFY `colors_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `dcchv1_contact_us`
--
ALTER TABLE `dcchv1_contact_us`
  MODIFY `contact_us_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dcchv1_copyright`
--
ALTER TABLE `dcchv1_copyright`
  MODIFY `copyright_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dcchv1_header`
--
ALTER TABLE `dcchv1_header`
  MODIFY `header_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `dcchv1_reach_us`
--
ALTER TABLE `dcchv1_reach_us`
  MODIFY `reach_us_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dcchv1_services`
--
ALTER TABLE `dcchv1_services`
  MODIFY `services_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dcchv1_testimonial`
--
ALTER TABLE `dcchv1_testimonial`
  MODIFY `testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
