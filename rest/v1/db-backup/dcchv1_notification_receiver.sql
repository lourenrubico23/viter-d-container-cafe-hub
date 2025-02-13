-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 13, 2025 at 09:30 AM
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
-- Table structure for table `dcchv1_notification_receiver`
--

CREATE TABLE `dcchv1_notification_receiver` (
  `receiver_aid` int(11) NOT NULL,
  `receiver_is_active` tinyint(1) NOT NULL,
  `receiver_name` varchar(100) NOT NULL,
  `receiver_email` varchar(100) NOT NULL,
  `receiver_phone_no` varchar(50) NOT NULL,
  `receiver_created` datetime NOT NULL,
  `receiver_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dcchv1_notification_receiver`
--

INSERT INTO `dcchv1_notification_receiver` (`receiver_aid`, `receiver_is_active`, `receiver_name`, `receiver_email`, `receiver_phone_no`, `receiver_created`, `receiver_datetime`) VALUES
(4, 1, 'Louren Rubico', 'louren.rubico@gmail.com', '90909090', '2025-02-13 16:06:20', '2025-02-13 16:06:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dcchv1_notification_receiver`
--
ALTER TABLE `dcchv1_notification_receiver`
  ADD PRIMARY KEY (`receiver_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dcchv1_notification_receiver`
--
ALTER TABLE `dcchv1_notification_receiver`
  MODIFY `receiver_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
