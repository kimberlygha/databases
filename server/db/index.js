var mysql = require('mysql');

module.exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'chat'
});

// This is where we will connect to the mySql and
// add chats and retrieve chats
module.exports.routes = {
  messages:{
    post: function(message, username){
      var self = this;
      self.connection.query('Select * from users where ?', {userName: username}, function(err, rows, field) {
        if (err) {
          console.log('do something');
        } else {
          message.user_id = rows[0].userId;
          self.connection.query('INSERT INTO messages SET ?', message, function(err, res, fields) {
            if (err) {
              console.log('There\'s an error: ', err);
            }
            console.log('cool message brah.');
          });
        }
      });

    }.bind(module.exports),
    get: function(callback){
      this.connection.query('SELECT msg, userName, roomName, dateTime from messages INNER JOIN users on messages.user_id=users.userId', [], function(err, rows, fields) {
        if (err) {
          callback(err);
        } else {
          callback(null, rows)
        }
      });
    }.bind(module.exports)  
  }, 
  users: {
    post: function(dbUserObj){
      // check to see if user is in db
      var self = this;
      self.connection.query('INSERT INTO users SET ?', dbUserObj, function(err, res){
        if (err) {
          console.log('brah, seriously?'); // TODO: refactor with promises
        } else {
          console.log('Welcome to our app, brah');
        }
      });
    }.bind(module.exports),
    get: function(){
    }  
  } 
};
