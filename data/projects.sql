#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------

DROP DATABASE workflow_projects;

CREATE DATABASE workflow_projects;

USE workflow_projects;

#------------------------------------------------------------
# Table: projects
#------------------------------------------------------------

CREATE TABLE projects(
        id            Int  Auto_increment  NOT NULL ,
        title         Varchar (150) NOT NULL ,
        content Text NOT NULL ,
        icon      Varchar (50) NULL ,
)ENGINE=InnoDB;

