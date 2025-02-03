-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 03, 2025 at 05:00 AM
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
(1, 'title', 'subtitle', 'feedback1.webp', 'feedback2.webp', 'feedback3.webp', 'Test Client Name', '', '', 'Test Client Messageee', '', '', '2025-02-03 09:29:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dcchv1_testimonial`
--
ALTER TABLE `dcchv1_testimonial`
  ADD PRIMARY KEY (`testimonial_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dcchv1_testimonial`
--
ALTER TABLE `dcchv1_testimonial`
  MODIFY `testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
