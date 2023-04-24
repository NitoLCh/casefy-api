-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bdcasefy
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bdcasefy
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bdcasefy` DEFAULT CHARACTER SET utf8mb4 ;
USE `bdcasefy` ;

-- -----------------------------------------------------
-- Table `bdcasefy`.`proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bdcasefy`.`proyecto` (
  `IdProyecto` INT NOT NULL AUTO_INCREMENT,
  `NombreProyecto` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`IdProyecto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `bdcasefy`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bdcasefy`.`user` (
  `IdUser` INT NOT NULL AUTO_INCREMENT,
  `Usuario` VARCHAR(255) NOT NULL,
  `Contraseña` VARCHAR(255) NOT NULL,
  `Correo` VARCHAR(255) NOT NULL,
  `Rol` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`IdUser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `bdcasefy`.`proyecto_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bdcasefy`.`proyecto_usuario` (
  `IdUser` INT NOT NULL,
  `IdProyecto` INT NOT NULL,
  `Rol` VARCHAR(255) NOT NULL,
  INDEX `IdUser` (`IdUser` ASC) VISIBLE,
  INDEX `IdProyecto` (`IdProyecto` ASC) VISIBLE,
  CONSTRAINT `proyecto_usuario_ibfk_1`
    FOREIGN KEY (`IdUser`)
    REFERENCES `bdcasefy`.`user` (`IdUser`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `proyecto_usuario_ibfk_2`
    FOREIGN KEY (`IdProyecto`)
    REFERENCES `bdcasefy`.`proyecto` (`IdProyecto`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `bdcasefy`.`tareas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bdcasefy`.`tareas` (
  `IdTareas` INT NOT NULL AUTO_INCREMENT,
  `IdProyecto` INT NOT NULL,
  `Tarea` VARCHAR(255) NOT NULL,
  `FechaIni` DATE NULL DEFAULT NULL,
  `FechaFin` DATE NULL DEFAULT NULL,
  `Estado` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`IdTareas`),
  INDEX `IdProyecto` (`IdProyecto` ASC) VISIBLE,
  CONSTRAINT `tareas_ibfk_1`
    FOREIGN KEY (`IdProyecto`)
    REFERENCES `bdcasefy`.`proyecto` (`IdProyecto`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `bdcasefy`.`tarea_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bdcasefy`.`tarea_usuario` (
  `IdTareas` INT NOT NULL,
  `IdUser` INT NOT NULL,
  INDEX `IdTareas` (`IdTareas` ASC) VISIBLE,
  INDEX `IdUser` (`IdUser` ASC) VISIBLE,
  CONSTRAINT `tarea_usuario_ibfk_1`
    FOREIGN KEY (`IdTareas`)
    REFERENCES `bdcasefy`.`tareas` (`IdTareas`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `tarea_usuario_ibfk_2`
    FOREIGN KEY (`IdUser`)
    REFERENCES `bdcasefy`.`user` (`IdUser`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
