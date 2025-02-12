-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 12, 2025 at 09:06 AM
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
(1, '[{\"name\":\"logo-brown.png\",\"id\":\"1QuN-xSi1V9DlJ2JRgwXP00yW_a-HP2vL\",\"datetime\":\"2025-02-12 14:16:07\"},{\"name\":\"spa-logo.png\",\"id\":\"1-fLz_V_5k9LPkObgum-Hu8jZtM-4Q1ke\",\"datetime\":\"2025-02-12 14:16:10\"}]', 'D’ Container Cafe Hub is a one stop shop from coffee, food, drinks to relaxing facial, massage salon spa in one. We started conceptualizing this place last March 2024 and finally open its doors last October 18, 2024.', 'Our goal is to serve quality and satisfying food while relaxing and pampering yourself in one place.', 'Serving extraordinary food to satisfy your palate.', '2025-02-12 14:16:04');

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
(3, '#983b00', '#390700', '#bc7b75', '#faf7f2', '#c2c2c2', '2025-02-12 16:00:13');

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
(2, '[{\"name\":\"logo.png\",\"id\":\"1Lv9LygLPwKOid2lVpGQsEtu3tASlYTyI\",\"datetime\":\"2025-02-12 07:50:37\"}]', '[{\"name\":\"bannerImage.webp\",\"id\":\"1n2NKcAK5TL0mlSaKhPzFLwio8kXPaQ6Z\",\"datetime\":\"2025-02-11 13:54:20\"}]', 'About', 'Coffee', 'Spa Salon', 'Reach Us', 'Indulge in delicious, high-quality food while unwinding and treating yourself—all in one perfect destination.', 'See Where We At', '2025-02-12 14:12:00');

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
(1, '[{\"name\":\"services-img-1.webp\",\"id\":\"19iQN1kwNJ7BuH7KARx1JDbXquJaqNIC0\",\"datetime\":\"2025-02-12 09:22:52\"}]', '[{\"name\":\"coffee-10.webp\",\"id\":\"1lOAHpwsSsFgmbMDlyh0-Sb53gbW420C9\",\"datetime\":\"2025-02-12 09:47:38\"},{\"name\":\"coffee-11.webp\",\"id\":\"1ZZpgtmpr-1UBvECS5vX6LCSwirFWEgzm\",\"datetime\":\"2025-02-12 09:47:42\"},{\"name\":\"coffee-12.webp\",\"id\":\"16T8AOZ967udrMZnTP5Z0O0Kf6F1Ox_Fu\",\"datetime\":\"2025-02-12 09:47:47\"},{\"name\":\"coffee-2.webp\",\"id\":\"1yQutEbSt_f58x6nwkWj-CkaOtXeCJVG0\",\"datetime\":\"2025-02-12 09:47:50\"},{\"name\":\"coffee-3.webp\",\"id\":\"1aWeviJgwLSnfN6lWb16x013RfoPmlaW_\",\"datetime\":\"2025-02-12 09:47:52\"},{\"name\":\"coffee-4.webp\",\"id\":\"1KjYLCiHvpv_xsKtTFKq9_njmtkkX93HO\",\"datetime\":\"2025-02-12 09:47:55\"},{\"name\":\"coffee-5.webp\",\"id\":\"1AZ53_5zv-5KXnIX2uT7fFCPs1timQrPt\",\"datetime\":\"2025-02-12 09:47:58\"},{\"name\":\"coffee-6.webp\",\"id\":\"1EuLxPZTYXZ83aSmgf0PztQkNyiy2zW6l\",\"datetime\":\"2025-02-12 09:48:02\"},{\"name\":\"coffee-7.webp\",\"id\":\"14uAt669XT-5LyQhX1m1VtoXjw-d5_7dU\",\"datetime\":\"2025-02-12 09:48:05\"},{\"name\":\"coffee-8.webp\",\"id\":\"17oDy_3kRR4yPgU0D0Rpt7KLMio6O61oD\",\"datetime\":\"2025-02-12 09:48:08\"},{\"name\":\"coffee-9.webp\",\"id\":\"15K2hHEvCewjRmDAhp9j0msS6pPNdqBU6\",\"datetime\":\"2025-02-12 09:48:11\"}]', 'Our Coffee', ' Our coffee is more than just a drink; it’s an experience.\n                      Sourced from the finest beans, expertly roasted to\n                      perfection, and brewed with care, every cup delivers rich\n                      flavors and an irresistible aroma. Whether you’re\n                      kick-starting your morning or enjoying a relaxing break,\n                      our coffee offers the perfect balance of quality, warmth,\n                      and satisfaction. From bold espressos to creamy lattes,\n                      every sip is crafted to delight your senses and elevate\n                      your day.', 'Boosts Energy and Focus', 'Rich in Antioxidants', 'Enhances Social Connections', 'Coffee provides a natural energy lift, helping you\n                          stay alert and focused throughout your day.', ' Packed with antioxidants, coffee can support your\n                          overall health by combating harmful free radicals.', ' Whether shared with friends or enjoyed during a quiet\n                          moment, coffee fosters connection and relaxation in\n                          everyday life.', 'Spa Salon', '[{\"name\":\"ES-Final Logo.png\",\"id\":\"1PIq_s4wrYnoM2qpX_bbHQTguvLY3q49b\",\"datetime\":\"2025-02-12 10:00:56\"}]', '[{\"name\":\"salon-1.webp\",\"id\":\"1QkUSVwGxML1IzfZigaruMyYDmAFCVPdS\",\"datetime\":\"2025-02-12 07:15:07\"},{\"name\":\"salon-2.webp\",\"id\":\"1kI_KZ8VV7FSUlt4HG1VGyEmDXWlW1j2d\",\"datetime\":\"2025-02-12 07:15:10\"},{\"name\":\"salon-3.webp\",\"id\":\"1Tix8QsLS9yrDMdlWyAWw3l--En2MyxLd\",\"datetime\":\"2025-02-12 07:15:13\"},{\"name\":\"salon-4.webp\",\"id\":\"1mekGEHzeV2qXWDEwu6vqwK0mKDeR76gZ\",\"datetime\":\"2025-02-12 07:15:17\"},{\"name\":\"salon-5.webp\",\"id\":\"12m94KY8c8LLHPoWQI5aHWRNL73qe8nNY\",\"datetime\":\"2025-02-12 07:15:20\"},{\"name\":\"salon-6.webp\",\"id\":\"1hBYqSlmPHLm1-pNiAx2BMqeYHK2Ebnvj\",\"datetime\":\"2025-02-12 07:15:23\"},{\"name\":\"salon-7.webp\",\"id\":\"1zH480BQKmI_sBsPagJNrBRGfAHr3f70R\",\"datetime\":\"2025-02-12 07:15:26\"},{\"name\":\"salon-8.webp\",\"id\":\"1tzuRnO46lSrT4kgMhgHA2CQhAuAsmA1T\",\"datetime\":\"2025-02-12 07:15:31\"},{\"name\":\"salon-9.webp\",\"id\":\"1rr8nqa1cXe_M4_4yb5IEv9fc-_Ek9dY1\",\"datetime\":\"2025-02-12 07:15:34\"}]', 'Escape to our spa salon, where relaxation meets rejuvenation. Immerse yourself in a tranquil atmosphere designed to soothe your senses and refresh your spirit. From luxurious massages and revitalizing facials to expertly curated treatments, our skilled professionals are dedicated to helping you look and feel your best. Whether you\'re seeking a moment of calm or a complete transformation, our spa salon is your sanctuary for wellness and beauty.', 'Step into our hair salon and discover the perfect blend of style and expertise. Our talented stylists are passionate about creating looks that complement your unique personality, whether it’s a fresh cut, vibrant color, or a  complete makeover. Using top-quality products and the latest techniques, we ensure your hair not only looks amazing but feels healthy and radiant. From everyday chic  to show-stopping glamour, our salon is your destination for confidence-boosting transformations.\n', '+63 915 110 1112', 'Make A Reservation', 'Menu', 'https://www.facebook.com/profile.php?id=100066976194884', '[{\"name\":\"coffee-menu-1.webp\",\"id\":\"1119JPZoTJOnKFToWEyMApbiI5e_bjU_z\",\"datetime\":\"2025-02-11 15:45:30\"},{\"name\":\"coffee-menu-2.webp\",\"id\":\"1855E4mwKnWWm3VJhgbzt37_eZzJEOIm1\",\"datetime\":\"2025-02-11 15:45:34\"},{\"name\":\"coffee-menu-3.webp\",\"id\":\"1vU6tMjiqRvKZTnbO1TwhmvCt_KlY-nOe\",\"datetime\":\"2025-02-11 15:45:37\"},{\"name\":\"coffee-menu-4.webp\",\"id\":\"1-0Tug5u2T6hcUCifkaVTLQadS5xdXZ-S\",\"datetime\":\"2025-02-11 15:45:42\"},{\"name\":\"coffee-menu-5.webp\",\"id\":\"18LIQ_nUgzMGUYtbVMOsf6Qu8i7D_8ew3\",\"datetime\":\"2025-02-11 15:45:45\"},{\"name\":\"coffee-menu-1.webp\",\"id\":\"1nWaGsbMwEdtu1BZvUONhhKotsqsJTgA6\",\"datetime\":\"2025-02-12 14:48:54\"},{\"name\":\"coffee-menu-2.webp\",\"id\":\"1X2XDggEkxhh-LsPQzWRxPPI15UB2RjQ_\",\"datetime\":\"2025-02-12 14:48:57\"},{\"name\":\"coffee-menu-3.webp\",\"id\":\"1kMEhPjhAxalJrggQ_cN96x3-ffjgvQUW\",\"datetime\":\"2025-02-12 14:49:00\"},{\"name\":\"coffee-menu-4.webp\",\"id\":\"1wBV2LvN1fKL9IboaYzAEEVlnchAwKlyY\",\"datetime\":\"2025-02-12 14:49:03\"},{\"name\":\"coffee-menu-5.webp\",\"id\":\"1NChEPkaMvD2TKazS6p1fZExMBRXorHtw\",\"datetime\":\"2025-02-12 14:49:07\"},{\"name\":\"coffee-menu-6.webp\",\"id\":\"1QmGE3mPgbHeVnebMeJ05YWvtnbDzI-vc\",\"datetime\":\"2025-02-12 14:49:10\"}]', 'Make A Reservation', 'Services', 'https://www.facebook.com/profile.php?id=100066976194884', '[{\"name\":\"salon-services-1.webp\",\"id\":\"1BhcdUhrCzmGowNiMWrWZ0yeufqhSPG2T\",\"datetime\":\"2025-02-12 07:03:43\"}]', '2025-02-12 14:48:51');

-- --------------------------------------------------------

--
-- Table structure for table `dcchv1_settings_role`
--

CREATE TABLE `dcchv1_settings_role` (
  `role_aid` int(11) NOT NULL,
  `role_is_active` tinyint(1) NOT NULL,
  `role_name` varchar(128) NOT NULL,
  `role_description` text NOT NULL,
  `role_created` datetime NOT NULL,
  `role_datetime` datetime NOT NULL,
  `role_is_admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dcchv1_settings_role`
--

INSERT INTO `dcchv1_settings_role` (`role_aid`, `role_is_active`, `role_name`, `role_description`, `role_created`, `role_datetime`, `role_is_admin`) VALUES
(1, 1, 'Admin', 'Admin', '2025-02-12 09:47:01', '2025-02-12 09:47:01', 1);

-- --------------------------------------------------------

--
-- Table structure for table `dcchv1_settings_users`
--

CREATE TABLE `dcchv1_settings_users` (
  `user_aid` int(11) NOT NULL,
  `user_is_active` tinyint(1) NOT NULL,
  `user_first_name` varchar(128) NOT NULL,
  `user_last_name` varchar(128) NOT NULL,
  `user_email` varchar(128) NOT NULL,
  `user_email_new` varchar(128) NOT NULL,
  `user_role_id` int(11) NOT NULL,
  `user_key` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_created` datetime NOT NULL,
  `user_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dcchv1_settings_users`
--

INSERT INTO `dcchv1_settings_users` (`user_aid`, `user_is_active`, `user_first_name`, `user_last_name`, `user_email`, `user_email_new`, `user_role_id`, `user_key`, `user_password`, `user_created`, `user_datetime`) VALUES
(1, 1, 'Emmanuelsda', 'Manalo', 'emmanuel.manalo@frontlinebusiness.com.ph', '', 1, '', '$2y$10$ZM8XsSt.K5ed.zGrSKg.HOblX7WjvmdkBkk7g0eWfADvpQy8HOKpC', '2025-02-12 10:12:34', '2025-02-12 12:59:16'),
(2, 1, 'Louren', 'Rubico', 'louren.rubico@frontlinebusiness.com.ph', '', 1, '', '$2y$10$yeqVatXSwPAXQA2bFuU02.ZwJ1ROVt9JcrsVSFxJvmXyiLVAbpN2.', '2025-02-12 13:25:56', '2025-02-12 15:54:34');

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
(1, 'What Our Clients Are Saying', 'Real Experiences, Genuine Feedback', '[{\"name\":\"testimonial-1.webp\",\"id\":\"1Ych_WTka_E6jUeBbtbfYdCBrZ-XIhDF2\",\"datetime\":\"2025-02-12 08:31:48\"}]', '[{\"name\":\"85ae0347-858d-495c-8a29-a84725e2b5f5.jpg\",\"id\":\"1zjfjFZmbZfdFEoMSqj2RrTjzaa2IR7Fl\",\"datetime\":\"2025-02-12 12:45:14\"}]', '[{\"name\":\"testimonial-2.webp\",\"id\":\"1nMXhKPu7xPlZQPEqSXNMVaXX470W-Jhp\",\"datetime\":\"2025-02-12 12:47:26\"}]', 'Ms. Ertha', 'Tom Alvarado', 'Rudy Aguilar', 'D’ Container Cafe Hub offers a warm, homey atmosphere and delicious food reminiscent of cherished family recipes. Their arroz a la cubana brings back nostalgic flavors, while the beef tapa and dynamite are must-tries. More than just a trendy spot, it\'s a place worth revisiting. Enjoy customizable coffee and a refreshing mango drink, and for pet lovers, it stands out as the top pet-friendly destination. A must-visit experience!', 'With an excellent food and drinks and a very cozy ambiance, perfect for your any or special occasion. I\'m highly recommend the newest Art Hub Cafe in Alaminos Laguna. D\' CONTAINER HUB CAFE Mabuhay !!', 'The staff is very friendly. It\'s a very good place. The price is reasonable. Overall, it looks great. Keep it up!!!', '2025-02-12 12:47:24');

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
-- Indexes for table `dcchv1_settings_role`
--
ALTER TABLE `dcchv1_settings_role`
  ADD PRIMARY KEY (`role_aid`);

--
-- Indexes for table `dcchv1_settings_users`
--
ALTER TABLE `dcchv1_settings_users`
  ADD PRIMARY KEY (`user_aid`);

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
-- AUTO_INCREMENT for table `dcchv1_settings_role`
--
ALTER TABLE `dcchv1_settings_role`
  MODIFY `role_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dcchv1_settings_users`
--
ALTER TABLE `dcchv1_settings_users`
  MODIFY `user_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `dcchv1_testimonial`
--
ALTER TABLE `dcchv1_testimonial`
  MODIFY `testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
