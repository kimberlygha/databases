var db = require('../db');
var Promise = require('bluebird');
var esc = require('../db/asyncMySQL.js').esc;

module.exports = {
  messages: {
    get: function (callback) {
      return new Promise(function(resolve, reject){
        db.routes.messages.get().then(resolve).catch(reject);
      });
    }, 
    post: function (messageData) {
      var newMessageObj = {};
      var username = esc(messageData.username);
      newMessageObj.msg = esc(messageData.text);
      newMessageObj.roomName = esc(messageData.roomname);
      newMessageObj.dateTime = new Date();
      return new Promise(function(resolve, reject){
        db.routes.messages.post(newMessageObj, username).then(resolve).catch(reject);
      });
    } 
  },

  users: {
    get: function () {
      return new Promise(function(resolve, reject){
        db.routes.users.get().then(resolve).catch(reject);
      });
    },
    post: function (username) { //{ username: name}
      var dbUserObj = {};
      dbUserObj.userName = esc(username);
      return new Promise(function(resolve, reject) {
        db.routes.users.post(dbUserObj).then(resolve).catch(reject);
      });
    }
  }
};

