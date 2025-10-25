-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           11.6.2-MariaDB - mariadb.org binary distribution
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour bdimmo
DROP DATABASE IF EXISTS `bdimmo`;
CREATE DATABASE IF NOT EXISTS `bdimmo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci */;
USE `bdimmo`;

-- Listage de la structure de table bdimmo. maison
DROP TABLE IF EXISTS `maison`;
CREATE TABLE IF NOT EXISTS `maison` (
  `area` int(11) DEFAULT NULL,
  `nb_bedroom` int(11) DEFAULT NULL,
  `nb_room` int(11) DEFAULT NULL,
  `nb_toilet` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `id_maison` bigint(20) NOT NULL AUTO_INCREMENT,
  `region_id_region` bigint(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `link_image` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  PRIMARY KEY (`id_maison`),
  KEY `FK6qo9j41vfsjoes9sgg0rg4qlc` (`region_id_region`),
  CONSTRAINT `FK6qo9j41vfsjoes9sgg0rg4qlc` FOREIGN KEY (`region_id_region`) REFERENCES `region` (`id_region`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Listage des données de la table bdimmo.maison : ~25 rows (environ)
INSERT INTO `maison` (`area`, `nb_bedroom`, `nb_room`, `nb_toilet`, `price`, `id_maison`, `region_id_region`, `address`, `link_image`, `postal_code`, `latitude`, `longitude`) VALUES
	(5417, 1, 5, 1, 1517045, 1, 4, '4th Floor', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison01.jpg', 'LTBG', 45.6942, -73.6331),
	(11121, 2, 2, 2, 1644335, 2, 1, 'Apt 551', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison02.jpg', 'AK33', 45.6836, -73.4362),
	(4973, 3, 6, 3, 252955, 3, 2, 'Room 1160', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison03.jpg', 'SVSE', 45.5017, -73.5673),
	(8963, 4, 4, 2, 1016219, 4, 2, 'Apt 12', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison04.jpg', 'HAGH', 45.60429, -73.453583),
	(16283, 5, 5, 1, 1348373, 5, 4, 'Suite 24', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison05.jpg', 'FBHK', 45.668896, -73.872871),
	(14650, 3, 7, 2, 1484191, 6, 3, 'PO Box 13440', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison06.jpg', 'SKEB', 45.536945, -73.510712),
	(5736, 5, 7, 2, 1514030, 7, 4, 'Apt 283', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison07.jpg', NULL, 45.5017, -73.5673),
	(14236, 4, 7, 2, 1372568, 8, 1, 'PO Box 74346', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison08.jpg', 'KPKF', 45.507, -73.566),
	(16270, 4, 6, 2, 500376, 9, 3, '10th Floor', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison09.jpg', 'KMKG', 45.4845, -73.5871),
	(18792, 4, 7, 3, 1098485, 10, 2, 'PO Box 14142', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison10.jpg', 'KPFC', 45.5415, -73.6181),
	(18588, 3, 7, 3, 1462979, 11, 5, 'Suite 83', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison11.jpg', 'EGKA', 45.536, -73.5884),
	(19828, 5, 9, 2, 1211976, 12, 1, 'Apt 100', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison12.jpg', 'NSFA', 45.4995, -73.5763),
	(18805, 3, 8, 2, 517219, 13, 4, 'PO Box 23885', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison13.jpg', 'WAPH', 45.5343, -73.5941),
	(13725, 3, 7, 3, 1178434, 14, 5, 'Room 603', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison14.jpg', 'WAJE', 45.5368, -73.5665),
	(15774, 5, 7, 3, 1098688, 15, 3, 'Room 1346', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison15.jpg', NULL, 45.5143, -73.563),
	(8982, 3, 8, 3, 156572, 16, 1, 'PO Box 90563', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison16.jpg', 'LEVT', 45.5087, -73.5691),
	(3745, 3, 7, 2, 1266488, 17, 2, 'PO Box 53335', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison17.jpg', 'TFFM', 45.5289, -73.5524),
	(19498, 4, 5, 2, 818803, 18, 5, 'PO Box 401', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison18.jpg', 'FVRG', 45.5162, -73.5823),
	(4799, 2, 6, 2, 553279, 19, 5, '5th Floor', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison19.jpg', NULL, 45.4953, -73.5721),
	(17366, 2, 4, 1, 583003, 20, 2, 'Suite 29', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison20.jpg', 'RORE', 45.5407, -73.5604),
	(6476, 2, 4, 1, 1064207, 21, 5, '19th Floor', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison21.jpg', 'WATM', 45.5231, -73.5796),
	(3789, 5, 5, 1, 427600, 22, 3, 'Suite 70', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison22.jpg', 'SLGY', 45.5355, -73.5513),
	(3041, 3, 6, 2, 212134, 23, 5, 'Room 156', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison23.jpg', 'KCIC', 45.5206, -73.5649),
	(16229, 2, 7, 3, 1064989, 24, 4, 'Apt 97', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maison24.jpg', 'GMMI', 45.5098, -73.5572),
	(24294, 4, 12, 4, 1500000, 25, 6, 'La Galia-Bonavista', 'https://raw.githubusercontent.com/ManasseTegGbegnohou/picsProjetImmo/refs/heads/master/maisonsGalerie/maisonElche.jpg', 'ZGHC', 38.29792514798492, -0.6856185786054342);

-- Listage de la structure de table bdimmo. maison_liked_by_user
DROP TABLE IF EXISTS `maison_liked_by_user`;
CREATE TABLE IF NOT EXISTS `maison_liked_by_user` (
  `id_maison_liked_by_user` bigint(20) NOT NULL AUTO_INCREMENT,
  `maison_id_maison` bigint(20) DEFAULT NULL,
  `user_id_user` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id_maison_liked_by_user`),
  KEY `FKcqbaxik2l0fu2rkannv05axle` (`maison_id_maison`),
  KEY `FK2qblu7pxradcgb5x1ne9uqinu` (`user_id_user`),
  CONSTRAINT `FK2qblu7pxradcgb5x1ne9uqinu` FOREIGN KEY (`user_id_user`) REFERENCES `user` (`id_user`),
  CONSTRAINT `FKcqbaxik2l0fu2rkannv05axle` FOREIGN KEY (`maison_id_maison`) REFERENCES `maison` (`id_maison`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Listage des données de la table bdimmo.maison_liked_by_user : ~4 rows (environ)
INSERT INTO `maison_liked_by_user` (`id_maison_liked_by_user`, `maison_id_maison`, `user_id_user`) VALUES
	(16, 1, 8),
	(17, 21, 8),
	(18, 4, 8),
	(19, 3, 8),
	(20, 1, 4),
	(21, 21, 4),
	(22, 4, 4),
	(23, 3, 4);

-- Listage de la structure de table bdimmo. region
DROP TABLE IF EXISTS `region`;
CREATE TABLE IF NOT EXISTS `region` (
  `id_region` bigint(20) NOT NULL AUTO_INCREMENT,
  `name_region` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_region`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Listage des données de la table bdimmo.region : ~6 rows (environ)
INSERT INTO `region` (`id_region`, `name_region`) VALUES
	(1, 'Montreal'),
	(2, 'Terrebonne'),
	(3, 'Longueuil'),
	(4, 'Boucherville'),
	(5, 'Varrennes'),
	(6, 'Elche');

-- Listage de la structure de table bdimmo. user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id_user` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Listage des données de la table bdimmo.user : ~4 rows (environ)
INSERT INTO `user` (`id_user`, `email`, `first_name`, `last_name`, `password`) VALUES
	(4, 'lamb@123.com', 'lam', 'n', '$2a$10$t7zy1wzgAE7iRdCTTgvaTOND9O1GjuybPKpXubzccEJGRghL1ktUy'),
	(5, 'andy@123.com', 'andy', 'la-futu', '$2a$10$m6Is0EthzFw2//yuQqV6CuOW2yAEpfUmqN8.SprX1/8TvK0rwpDNW'),
	(6, 'toto@toto.com', 'Marc-Antoine', 'Mercier', '$2a$10$1punYfBxNKBc/NxyjbeJkuWPY1zwhs7.vD5Rkjaob0CPFn5oC.Lq2'),
	(8, 'aymen@test.com', 'aymen', 'ker', '$2a$10$IBc6gRkXAywhq6m9yRJ5i.RPSWNYNPCXSK50yC9Bj2m0CohmuvMF.');

-- Listage de la structure de table bdimmo. userdto
DROP TABLE IF EXISTS `userdto`;
CREATE TABLE IF NOT EXISTS `userdto` (
  `id_user` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Listage des données de la table bdimmo.userdto : ~0 rows (environ)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
