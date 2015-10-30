CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* 
    REMEBER: A message can only have ONE user
             So add the user to the message
             HOT THE OTHER WAY AROUND.
  */
  id int NOT NULL AUTO_INCREMENT,
  msg varchar(140), 
  room_id int,
  user_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (room_id)
    REFERENCES rooms(id)
    ON DELETE CASCADE,
  FOREIGN KEY (user_id)
    REFERENCES users(id) 
    ON DELETE CASCADE,
);


/* Create other tables and define schemas for them here! */

/*
  TODO: Create Table Users
  TODO: Create Table Rooms // extra
*/
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT, 
  userName varchar(20), 
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT, 
  roomName varchar(20), 
  PRIMARY KEY (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

