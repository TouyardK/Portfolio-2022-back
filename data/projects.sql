#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------

DROP DATABASE workflow_projects;

CREATE DATABASE workflow_projects;

USE workflow_projects;

#------------------------------------------------------------
# Table: projects
#------------------------------------------------------------

CREATE TABLE projects (
        id            Int  Auto_increment  NOT NULL ,
        title         Varchar (150) NOT NULL ,
        content Text NOT NULL ,
        icon      Varchar (50) NULL 
) ENGINE=InnoDB;

CREATE TABLE projects
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150),
    content TEXT NOT NULL,
    icon VARCHAR(50) NULL
)
