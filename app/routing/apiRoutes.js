var friendsArray = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function(req, res) {
    // console.log(req.body);
    friendsArray.push(req.body);
    // sends total friends array back to the front-end client so you can return the data
    res.json(friendsArray);
  });
};
