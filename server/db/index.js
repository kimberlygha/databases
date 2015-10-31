var mysql = require('mysql');

module.exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'chat'
});
var makeQueryString = function(message) {
  var userID = 1; // TODO: get username ID
  var roomID = 1; // TODO: get roomname ID
  var text = message.text;

  return 'INSERT INTO messages (msg, room_id, user_id) values ( '+ text +', '+userID+', '+roomID+' );'

};
// This is where we will connect to the mySql and
// add chats and retrieve chats
module.exports.routes = {
  messages:{
    post: function(message){
      var self = this;
      // parse message into query string
      // make sure that our DB won't get hacked by rouge drop table command

      // pass string in makeQueryString(message)
      // execute callback to let user know that successful call has been made. 
      self.connection.query('INSERT INTO users SET ?', {userName: 'Kim'}, function(err, result){
        self.connection.query('INSERT INTO rooms SET ?', {roomName: 'BENDER'}, function(err, result){
          self.connection.query('INSERT INTO messages SET ?', {msg: 'hello', user_id:1, room_id:1}, function(err, rows, fields){
            console.log(err, fields, rows);
          });
        });
      });



    }.bind(module.exports),
    get: function(){}  
  }, 
  users: {
    post: function(){},
    get: function(){}  
  } 
};
