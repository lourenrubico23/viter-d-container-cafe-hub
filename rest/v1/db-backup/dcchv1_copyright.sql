-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2025 at 02:15 PM
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
(1, 'test', 2025);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dcchv1_copyright`
--
ALTER TABLE `dcchv1_copyright`
  ADD PRIMARY KEY (`copyright_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dcchv1_copyright`
--
ALTER TABLE `dcchv1_copyright`
  MODIFY `copyright_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
