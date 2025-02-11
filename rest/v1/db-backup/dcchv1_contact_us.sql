-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2025 at 08:52 AM
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
(1, 'dsdsd', 'dsdsd', 'titledfd', '2025-01-30 15:50:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dcchv1_contact_us`
--
ALTER TABLE `dcchv1_contact_us`
  ADD PRIMARY KEY (`contact_us_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dcchv1_contact_us`
--
ALTER TABLE `dcchv1_contact_us`
  MODIFY `contact_us_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
