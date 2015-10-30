var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) {
  // talks to controllers with post and get requests. 
    // /messages route
    // /users
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

module.exports = router;

