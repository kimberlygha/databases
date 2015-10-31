var models = require('../models');


// Write our server logic here

module.exports = {
  // Routes messages to /messages

  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      // use modeles.messages.get, then respond out with the returned messages
      models.messages.get('HELLLLLO?')
      res.sendStatus(200);
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {
      
      models.messages.post(req.body)
      res.sendStatus(201)
    } 
  },

  // Routes messages to /users
  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};




// POST
// users takes an object {username: name}
// messages takes object {username, message, roomname}

// GET
// messages returns an array of messages
// Extra: users returns an array of users 
