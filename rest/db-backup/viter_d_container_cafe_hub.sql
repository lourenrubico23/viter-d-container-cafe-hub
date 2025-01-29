-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 29, 2025 at 08:48 AM
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
-- Database: `viter_d_container_cafe_hub`
--

-- --------------------------------------------------------

--
-- Table structure for table `dcchv1_about`
--

CREATE TABLE `dcchv1_about` (
  `about_aid` int(11) NOT NULL,
  `about_img` varchar(100) NOT NULL,
  `about_description_a` text NOT NULL,
  `about_description_b` text NOT NULL,
  `about_description_c` text NOT NULL,
  `about_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dcchv1_about`
--

INSERT INTO `dcchv1_about` (`about_aid`, `about_img`, `about_description_a`, `about_description_b`, `about_description_c`, `about_datetime`) VALUES
(1, 'logo-brown.png', 'D’ Container Cafe Hub is a one stop shop from coffee, food, drinks to relaxing facial, massage salon spa in one. We started conceptualizing this place last March 2024 and finally open its doors last October 18, 2024. ', 'Our goal is to serve quality and satisfying food while relaxing and pampering yourself in one place.', 'Serving extraordinary food to satisfy your palate.', '2025-01-29 13:21:42');

-- --------------------------------------------------------

--
-- Table structure for table `dcchv1_header`
--

CREATE TABLE `dcchv1_header` (
  `header_aid` int(11) NOT NULL,
  `header_logo_img` varchar(100) NOT NULL,
  `header_banner_img` varchar(100) NOT NULL,
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
(2, 'logo.png', 'bannerImage.webp', 'About', 'Coffee', 'asas', '', 'Testiiuu', 'test', '2025-01-29 12:44:35');

-- --------------------------------------------------------

--
-- Table structure for table `dcchv1_services`
--

CREATE TABLE `dcchv1_services` (
  `services_aid` int(11) NOT NULL,
  `services_coffee_img` varchar(100) NOT NULL,
  `services_coffee_title` varchar(200) NOT NULL,
  `services_coffee_description` text NOT NULL,
  `services_product_a` text NOT NULL,
  `services_product_b` text NOT NULL,
  `services_product_c` text NOT NULL,
  `services_product_description_a` text NOT NULL,
  `services_product_description_b` text NOT NULL,
  `services_product_description_c` text NOT NULL,
  `services_salon_title` varchar(200) NOT NULL,
  `services_salon_img` varchar(100) NOT NULL,
  `services_salon_description_a` text NOT NULL,
  `services_salon_description_b` text NOT NULL,
  `services_contact` varchar(50) NOT NULL,
  `services_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dcchv1_services`
--

INSERT INTO `dcchv1_services` (`services_aid`, `services_coffee_img`, `services_coffee_title`, `services_coffee_description`, `services_product_a`, `services_product_b`, `services_product_c`, `services_product_description_a`, `services_product_description_b`, `services_product_description_c`, `services_salon_title`, `services_salon_img`, `services_salon_description_a`, `services_salon_description_b`, `services_contact`, `services_datetime`) VALUES
(1, 'services-img-1.webp', 'Our Coffee', ' Our coffee is more than just a drink; it’s an experience.\n                      Sourced from the finest beans, expertly roasted to\n                      perfection, and brewed with care, every cup delivers rich\n                      flavors and an irresistible aroma. Whether you’re\n                      kick-starting your morning or enjoying a relaxing break,\n                      our coffee offers the perfect balance of quality, warmth,\n                      and satisfaction. From bold espressos to creamy lattes,\n                      every sip is crafted to delight your senses and elevate\n                      your day.', 'Boosts Energy and Focus:', 'Rich in Antioxidants:', 'Enhances Social Connections:', 'Coffee provides a natural energy lift, helping you\n                          stay alert and focused throughout your day.', ' Packed with antioxidants, coffee can support your\n                          overall health by combating harmful free radicals.', ' Whether shared with friends or enjoyed during a quiet\n                          moment, coffee fosters connection and relaxation in\n                          everyday life.', 'Spa Salon', '', 'Escape to our spa salon, where relaxation meets\n                      rejuvenation. Immerse yourself in a tranquil atmosphere\n                      designed to soothe your senses and refresh your spirit.\n                      From luxurious massages and revitalizing facials to\n                      expertly curated treatments, our skilled professionals are\n                      dedicated to helping you look and feel your best. Whether\n                      you\'re seeking a moment of calm or a complete\n                      transformation, our spa salon is your sanctuary for\n                      wellness and beauty.', 'Step into our hair salon and discover the perfect blend of\n                      style and expertise. Our talented stylists are passionate\n                      about creating looks that complement your unique\n                      personality, whether it’s a fresh cut, vibrant color, or a\n                      complete makeover. Using top-quality products and the\n                      latest techniques, we ensure your hair not only looks\n                      amazing but feels healthy and radiant. From everyday chic\n                      to show-stopping glamour, our salon is your destination\n                      for confidence-boosting transformations.', '+63 915 110 1112', '2025-01-29 15:48:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dcchv1_about`
--
ALTER TABLE `dcchv1_about`
  ADD PRIMARY KEY (`about_aid`);

--
-- Indexes for table `dcchv1_header`
--
ALTER TABLE `dcchv1_header`
  ADD PRIMARY KEY (`header_aid`);

--
-- Indexes for table `dcchv1_services`
--
ALTER TABLE `dcchv1_services`
  ADD PRIMARY KEY (`services_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dcchv1_about`
--
ALTER TABLE `dcchv1_about`
  MODIFY `about_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dcchv1_header`
--
ALTER TABLE `dcchv1_header`
  MODIFY `header_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `dcchv1_services`
--
ALTER TABLE `dcchv1_services`
  MODIFY `services_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
