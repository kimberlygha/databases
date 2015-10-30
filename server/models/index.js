var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      // When invoked, call db.retrieveMessage to get messages from db
      // invoke callback when retrieved messages
    }, 
    // a function which can be used to insert a message into the database
    post: function (callback, messageData) {
      // when invoked
        // parse messageData
        // pass db.sendMessage the callback and the messageData
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

