-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2023 at 01:28 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `immobilier`
--

-- --------------------------------------------------------

--
-- Table structure for table `agent`
--

CREATE TABLE `agent` (
  `id` int(11) NOT NULL,
  `agentName` varchar(255) DEFAULT NULL,
  `agentDescription` varchar(255) DEFAULT NULL,
  `agentAddress` varchar(255) DEFAULT NULL,
  `agentValid` tinyint(1) DEFAULT 0,
  `agentCode` varchar(255) DEFAULT NULL,
  `agentPhoneNumber` varchar(255) DEFAULT NULL,
  `agentWhatsapp` varchar(255) DEFAULT NULL,
  `agentEmail` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `agent`
--

INSERT INTO `agent` (`id`, `agentName`, `agentDescription`, `agentAddress`, `agentValid`, `agentCode`, `agentPhoneNumber`, `agentWhatsapp`, `agentEmail`) VALUES
(1, 'Ze sanzang', 'Five star rated agent', 'Douala-Cameroun', 0, 'code101', '671307800', '55197134', 'sazang@gmail.com'),
(2, 'Daniel-Update', 'Five star rated agent', 'Douala-Cameroun', 1, 'code101', '671307800', '55197134', 'daniel@gmail.com'),
(4, 'Nsini Franc', 'Four star rated agent', 'Yaounde-Cameroun', 0, 'code101', '671307800', '55197134', 'franc@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `ammenities`
--

CREATE TABLE `ammenities` (
  `id` int(11) NOT NULL,
  `ammName` varchar(255) DEFAULT NULL,
  `ammDescription` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ammenities`
--

INSERT INTO `ammenities` (`id`, `ammName`, `ammDescription`) VALUES
(1, 'chair', 'two person chair'),
(3, 'fan-update', '3x fan that refreshes house');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `catName` varchar(255) DEFAULT NULL,
  `catDescription` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `catName`, `catDescription`) VALUES
(1, 'Duplex', 'As large as 4 rooms palour'),
(2, 'Story Building Update', 'As large as 5 rooms palour');

-- --------------------------------------------------------

--
-- Table structure for table `contact_information`
--

CREATE TABLE `contact_information` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact_information`
--

INSERT INTO `contact_information` (`id`, `name`, `email`, `phoneNumber`) VALUES
(1, 'contact info', 'email@contact.com', '656789099'),
(2, 'test info-update', 'email-test@contact.com', '656789099');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` int(11) NOT NULL,
  `Region` varchar(255) DEFAULT NULL,
  `Ville` varchar(255) DEFAULT NULL,
  `Quartier` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `Region`, `Ville`, `Quartier`, `Address`) VALUES
(1, 'Centre', 'Yaounde', 'Awae-Escalier', 'aw-y'),
(2, 'Littoral', 'Douala', 'Bonaber', 'Bon-L'),
(3, 'East', 'Bertoua', 'Ngaikada', 'Ngai-B');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `prodName` varchar(255) DEFAULT NULL,
  `prodDesc` varchar(255) DEFAULT NULL,
  `prodQuater` varchar(255) DEFAULT NULL,
  `prodPrice` float DEFAULT NULL,
  `prodBedRooms` int(11) DEFAULT NULL,
  `prodBathRooms` int(11) DEFAULT NULL,
  `images` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `prodName`, `prodDesc`, `prodQuater`, `prodPrice`, `prodBedRooms`, `prodBathRooms`, `images`) VALUES
(1, 'Duplex', 'Well located and is found in a top quarter', 'awae-escalier', 145000, 5, 3, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fvr-splice-j%2F00%2F76%2Ff8%2Fe4.jpg&imgrefurl=https%3A%2F%2Fwww.tripadvisor.co.uk%2FVacationRentals-g293773-Reviews-Yaounde_Centre_Region-Vacation_Rentals.html&tbnid=-t07kg8JSl6FGM&vet=12ahUKEwjs0Kjx64D9AhVKgCcCHQEqAScQMygBegUIARDlAQ..i&docid=9I-6-xR7P3ZkeM&w=800&h=600&q=house%20in%20yaounde&ved=2ahUKEwjs0Kjx64D9AhVKgCcCHQEqAScQMygBegUIARDlAQ'),
(2, 'Studio', 'Modern studio Update', 'bastos', 45000, 1, 1, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.homecm.online%2Fcommon%2Fuploads%2F2021%2F06%2F226b10ee-4552-4601-afef-2ff54745d7aa.jpg&imgrefurl=https%3A%2F%2Fwww.homecm.online%2Fproperties%2Fstudio-a-louer-yaounde-omnisport%2F&tbnid=55x87cAU4P66mM&vet=12ahUKEwj4xZuo7ID9AhU6picCHf-0Bq4QMygCegUIARC_AQ..i&docid=HmKtN5bLOHkc5M&w=810&h=1080&q=studio%20image%20in%20yaounde&ved=2ahUKEwj4xZuo7ID9AhU6picCHf-0Bq4QMygCegUIARC_AQ');

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `typeName` varchar(255) DEFAULT NULL,
  `typeDescription` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `typeName`, `typeDescription`) VALUES
(1, 'Duplex', 'For houses with more than 4 rooms'),
(2, 'Appartment-Update', 'For 1 room and 1 palour houses');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `userAddress` varchar(255) DEFAULT NULL,
  `userPhoneNumber` varchar(255) DEFAULT NULL,
  `userWhatsapp` varchar(255) DEFAULT NULL,
  `userEmail` varchar(255) DEFAULT NULL,
  `userPassword` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userName`, `userAddress`, `userPhoneNumber`, `userWhatsapp`, `userEmail`, `userPassword`) VALUES
(1, 'franc', 'Yaounde', '55197144', '671307800', 'franc@gmail.com', '12345'),
(2, 'Junior', 'Douala', '89197144', '690307800', 'junior@gmail.com', '12345'),
(3, 'MIT', 'Douala', '89197144', '690307800', 'mit@gmail.com', '12345');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agent`
--
ALTER TABLE `agent`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `agentEmail` (`agentEmail`);

--
-- Indexes for table `ammenities`
--
ALTER TABLE `ammenities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_information`
--
ALTER TABLE `contact_information`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `prodDesc` (`prodDesc`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userEmail` (`userEmail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agent`
--
ALTER TABLE `agent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ammenities`
--
ALTER TABLE `ammenities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `contact_information`
--
ALTER TABLE `contact_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
