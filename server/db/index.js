var asyncMySQL = require('./asyncMySQL').asyncMySQL;
module.exports.routes = {
  messages:{
    post: function(message, username){
      return asyncMySQL('select * from users where?', {userName: username}).then(function(users){
        message.user_id = users[0].userId;
        return asyncMySQL('INSERT INTO messages SET ?', message)
      });
    },
    get: function(callback){
      return asyncMySQL('SELECT msg, userName, roomName, dateTime from messages INNER JOIN users on messages.user_id=users.userId');
    }  
  }, 
  users: {
    post: function(dbUserObj){
      var queryString = 'INSERT INTO users SET ?';
      return asyncMySQL(queryString, dbUserObj);
    },
    get: function(){
      return asyncMySQL('SELECT * from users');
    }  
  } 
};
