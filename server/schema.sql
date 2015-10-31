CREATE DATABASE IF NOT EXISTS chat ;


USE chat;

CREATE TABLE users
(
  userId int AUTO_INCREMENT PRIMARY KEY, 
  userName VARCHAR(20) 
);

CREATE TABLE rooms
(
  roomId int AUTO_INCREMENT PRIMARY KEY, 
  roomName VARCHAR(20) 
);

CREATE TABLE messages
(
  msgId int AUTO_INCREMENT PRIMARY KEY,
  msg VARCHAR(140), 
  room_id int,
  user_id int,
  FOREIGN KEY (room_id)
    REFERENCES rooms(roomId)
    ON DELETE CASCADE,
  FOREIGN KEY (user_id)
    REFERENCES users(userId) 
    ON DELETE CASCADE
);



