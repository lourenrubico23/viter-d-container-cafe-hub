-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 13, 2025 at 09:29 AM
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
-- Table structure for table `dcchv1_notification_log`
--

CREATE TABLE `dcchv1_notification_log` (
  `notification_log_aid` int(11) NOT NULL,
  `notification_log_name` varchar(100) NOT NULL,
  `notification_log_email` varchar(100) NOT NULL,
  `notification_log_phone` varchar(50) NOT NULL,
  `notification_log_message` text NOT NULL,
  `notification_log_receiver` varchar(100) NOT NULL,
  `notification_log_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dcchv1_notification_log`
--

INSERT INTO `dcchv1_notification_log` (`notification_log_aid`, `notification_log_name`, `notification_log_email`, `notification_log_phone`, `notification_log_message`, `notification_log_receiver`, `notification_log_created`) VALUES
(1, 'Luke', 'lourenisobel18@gmail.com', '09090909', 'Test email', 'louren.rubico@frontlinebusiness.com.ph', '2025-02-13 13:08:54'),
(2, 'Louren Isobel', 'louren@gmail.com', '92393484834', 'Testststs', 'louren.rubico@frontlinebusiness.com.ph', '2025-02-13 13:16:44'),
(3, 'Louren 1:19', 'louren@gmal.com', '0937208023', 'Test Email', 'louren.rubico@frontlinebusiness.com.ph', '2025-02-13 13:20:16'),
(4, 'Louise 1:23', 'louren@gmail.com', '3453456346', 'Test email', 'louren.rubico@frontlinebusiness.com.ph', '2025-02-13 13:23:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dcchv1_notification_log`
--
ALTER TABLE `dcchv1_notification_log`
  ADD PRIMARY KEY (`notification_log_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dcchv1_notification_log`
--
ALTER TABLE `dcchv1_notification_log`
  MODIFY `notification_log_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
