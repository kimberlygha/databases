var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".




// This is where we will connect to the mySql and
// add chats and retrieve chats
module.exports = {
  messages:{
    post: function(message){
      console.log('INSIDE DB, RECIEVED MESSAGE', message);
    },
    get: function(){}  
  }, 
  users: {
    post: function(){},
    get: function(){}  
  } 
};
