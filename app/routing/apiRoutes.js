var friendsArray = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function(req, res) {
    var myPost = req.body;
    console.log(myPost);
    friendsArray.push(req.body);
    // calculate best match based on results
    // sends total friends array back to the front-end client so you can return the data
    res.json(friendsArray);
  });
};


// function bestMatch(myPost, friendsArray) {
//   var sum = myPost.scores[].reduce(add, 0);
//   function add(a,b){
//     return a + b;
//   }

// }