-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 31, 2025 at 06:49 AM
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
(1, 'sdsfdfdfdf', 'sdsdsds', 'dsdsdsd', 'sdsdsd', 'https://www.google.com/maps/place/D\'Container+Cafe+Hub/@14.0596892,121.2458552,17z/data=!4m6!3m5!1s0x33bd6900286aaa39:0xb75fae24b925907a!8m2!3d14.059812!4d121.2484964!16s%2Fg%2F11wn0nr210?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D', 'gfgfg', '2025-01-31 10:27:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dcchv1_reach_us`
--
ALTER TABLE `dcchv1_reach_us`
  ADD PRIMARY KEY (`reach_us_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dcchv1_reach_us`
--
ALTER TABLE `dcchv1_reach_us`
  MODIFY `reach_us_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
