var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (MSG) {
      // When invoked, call db.retrieveMessage to get messages from db
      // invoke callback when retrieved messages
      console.log(MSG);
    }, 
    // a function which can be used to insert a message into the database
    post: function (messageData) {
      // when invoked
        // parse messageData
        // pass db.sendMessage the callback and the messageData
      // console.log('message recieved, passing to db');
      db.routes.messages.post(messageData);
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

