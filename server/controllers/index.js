var models = require('../models');


// Write our server logic here

module.exports = {
  // Routes messages to /messages

  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      // use modeles.messages.get, then respond out with the returned messages
      console.log(req._remoteAddress);
      var callback = function(err, messages) {
        if (err) {
          console.log('Cool error dude', err);
        }
        res.send(JSON.stringify({results: messages})); //[{...}, {...}]
      }

      models.messages.get(callback)
      
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
    post: function (req, res) {
      console.log('/users post request recieved, making user: ', req.body.username);
      models.users.post(req.body.username);
      res.sendStatus(201);
    }
  }
};




// POST
// users takes an object {username: name}
// messages takes object {username, message, roomname}

// GET
// messages returns an array of messages
// Extra: users returns an array of users 
