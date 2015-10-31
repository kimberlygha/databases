DROP DATABASE chat;
CREATE DATABASE IF NOT EXISTS chat ;


USE chat;

CREATE TABLE users
(
  userId int AUTO_INCREMENT PRIMARY KEY, 
  userName VARCHAR(20) UNIQUE 
);

CREATE TABLE messages
(
  msgId int AUTO_INCREMENT PRIMARY KEY,
  msg VARCHAR(140), 
  user_id int,
  roomName VARCHAR(30),
  FOREIGN KEY (user_id)
    REFERENCES users(userId) 
    ON DELETE CASCADE
);



