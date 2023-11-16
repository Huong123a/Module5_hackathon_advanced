//CREATE SCHEMA `hackathon_db` ;
-- tạo bảng users
CREATE TABLE `hackathon_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role` TINYINT NOT NULL,
  PRIMARY KEY (`id`));
 -- tạo bảng tasks
  CREATE TABLE `hackathon_db`.`task` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `priority` VARCHAR(200) NOT NULL,
  `deadline` DATETIME NOT NULL,
  `done` TINYINT NOT NULL,
  PRIMARY KEY (`id`));