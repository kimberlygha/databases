var models = require('../models');


// Write our server logic here

module.exports = {
  // Routes messages to /messages

  messages: {
    get: function (req, res) {
      models.messages.get().then(function(data){
        res.send(JSON.stringify({results: data}));
      }).catch(function(err){
        console.log(err);
        res.sendStatus(501);
      })
    }, 
    post: function (req, res) {
      models.messages.post(req.body).then(function(d){
        res.send('GREAT SUCCESS');
      }).catch(function(err){
        console.log('(╯°□°）╯︵ ┻━┻ Y YOU MESSAGE SUCK?', err);
        res.sendStatus(501)
      })
    } 
  },

  // Routes messages to /users
  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get().then(function(users){
        res.send(JSON.stringify(users));
      }).catch(function(err){
        console.log('wtf mate?', err);
      });
    },
    post: function (req, res) {
      models.users.post(req.body.username).then(function(){
        console.log('sent!');
        res.sendStatus(201);
      }).catch(function(err){
        console.log('(╯°□°）╯︵ ┻━┻ ', err);
        res.sendStatus(501)
      });
    }
  }
};




// POST

// GET
// messages returns an array of messages
// Extra: users returns an array of users 
