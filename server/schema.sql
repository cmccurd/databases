CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  userName varchar(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  messages_id int NOT NULL AUTO_INCREMENT,
  roomName varchar(10) NOT NULL,
  text varchar(300) NOT NULL,
  createdAt timestamp NULL DEFAULT NULL,
  userName varchar(10) NOT NULL,
  user_id int NOT NULL,
  PRIMARY KEY (messages_id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/

