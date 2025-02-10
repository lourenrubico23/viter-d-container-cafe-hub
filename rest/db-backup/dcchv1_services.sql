-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2025 at 08:57 AM
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
-- Table structure for table `dcchv1_services`
--

CREATE TABLE `dcchv1_services` (
  `services_aid` int(11) NOT NULL,
  `services_coffee_img` varchar(100) NOT NULL,
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
  `services_salon_img` varchar(100) NOT NULL,
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
(1, 'services-img-1.webp', 'coffee-1.webp, coffee-2.webp, coffee-3.webp, coffee-4.webp, coffee-5.webp, coffee-6.webp, coffee-7.webp, coffee-8.webp, coffee-9.webp, coffee-10.webp, coffee-11.webp, coffee-12.webp', 'Our Coffee', ' Our coffee is more than just a drink; it’s an experience.\n                      Sourced from the finest beans, expertly roasted to\n                      perfection, and brewed with care, every cup delivers rich\n                      flavors and an irresistible aroma. Whether you’re\n                      kick-starting your morning or enjoying a relaxing break,\n                      our coffee offers the perfect balance of quality, warmth,\n                      and satisfaction. From bold espressos to creamy lattes,\n                      every sip is crafted to delight your senses and elevate\n                      your day.', 'Boosts Energy and Focus:', 'Rich in Antioxidants:', 'Enhances Social Connections:', 'Coffee provides a natural energy lift, helping you\n                          stay alert and focused throughout your day.', ' Packed with antioxidants, coffee can support your\n                          overall health by combating harmful free radicals.', ' Whether shared with friends or enjoyed during a quiet\n                          moment, coffee fosters connection and relaxation in\n                          everyday life.', 'Spa Salon', 'services-img-2.webp', 'salon-1.webp, salon-2.webp, salon-3.webp, salon-4.webp, salon-5.webp, salon-6.webp, salon-7.webp, salon-8.webp, salon-9.webp, salon-10.webp', 'Escape to our spa salon, where relaxation meets\n                      rejuvenation. Immerse yourself in a tranquil atmosphere\n                      designed to soothe your senses and refresh your spirit.\n                      From luxurious massages and revitalizing facials to\n                      expertly curated treatments, our skilled professionals are\n                      dedicated to helping you look and feel your best. Whether\n                      you\'re seeking a moment of calm or a complete\n                      transformation, our spa salon is your sanctuary for\n                      wellness and beauty.', 'Step into our hair salon and discover the perfect blend of\n                      style and expertise. Our talented stylists are passionate\n                      about creating looks that complement your unique\n                      personality, whether it’s a fresh cut, vibrant color, or a\n                      complete makeover. Using top-quality products and the\n                      latest techniques, we ensure your hair not only looks\n                      amazing but feels healthy and radiant. From everyday chic\n                      to show-stopping glamour, our salon is your destination\n                      for confidence-boosting transformations.', '+63 915 110 1112', 'Make A Reservation', 'Menu', 'https://www.facebook.com/profile.php?id=100066976194884', 'coffee-menu-1.webp, coffee-menu-2.webp, coffee-menu-3.webp, coffee-menu-4.webp, coffee-menu-5.webp, coffee-menu-6.webp', 'Make A Reservation', 'Services', 'https://www.facebook.com/profile.php?id=100066976194884', 'salon-services-1.webp', '2025-02-10 14:18:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dcchv1_services`
--
ALTER TABLE `dcchv1_services`
  ADD PRIMARY KEY (`services_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dcchv1_services`
--
ALTER TABLE `dcchv1_services`
  MODIFY `services_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
