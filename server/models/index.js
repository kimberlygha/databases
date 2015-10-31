var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      // When invoked, call db.retrieveMessage to get messages from db
      // invoke callback when retrieved messages
      db.routes.messages.get(callback);
    }, 
    // a function which can be used to insert a message into the database
    post: function (messageData) {
      // make new object
      var newMessageObj = {};
      var username = messageData.username;
      newMessageObj.msg = messageData.text;
      newMessageObj.roomName = messageData.roomname;
      newMessageObj.dateTime = new Date();
      db.routes.messages.post(newMessageObj, username);
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username) { //{ username: name}
      // parsing
      var dbUserObj = {};
      dbUserObj.userName = username
      console.log('received username in models, moving to db: ' + username);
      db.routes.users.post(dbUserObj)
    }
  }
};

