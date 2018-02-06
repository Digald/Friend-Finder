var friendsArray = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function(req, res) {
    var currUser = req.body;
    console.log(currUser);
    // calculate best match based on results
    // bestMatch(currUser, friendsArray);
    // sends total friends array back to the front-end client so you can return the data
    friendsArray.push(req.body);
    // console.log("from POST: " + JSON.stringify(friendsArray,null,2));
    res.json(bestMatch(currUser, friendsArray));
  });
};

function bestMatch(currUser, friendsArray) {
  // Sum up the total scores from the user currently submitting
  var mySum = currUser.scores.reduce(add, 0);
  // Loop through the friendsArray and add a property "scoreTotal" which is the sum of the existing scores of each friend
  for (var i in friendsArray) {
    friendsArray[i].scoreTotal = friendsArray[i].scores.reduce(add, 0);
  }
  // Make a "current" value for the first friend's total
  var curr = friendsArray[0].scoreTotal;
  // Make a default match for the user that will be updated later
  var match = friendsArray[0];
  // Calcuate the first different in absolute value and assign that to a variable. This will be our initial difference
  var diff = Math.abs(mySum - curr);
  for (var i in friendsArray) {
    // A newdiff variable will calulate the difference between the current user's submision and the next scoreTotal in the friends array
    var newdiff = Math.abs(mySum - friendsArray[i].scoreTotal);
    // if the new difference is closer than the original one defined above, make that new number the original, otherwise throw it away
    if (newdiff < diff) {
      diff = newdiff;
      // set the match equal to that entire object if it has the smallest different
      var match = friendsArray[i];
    }
    
  }
  return JSON.stringify(match);
}

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

// {
// 	"name": "Joe",
// 	"scores": [1,2,3,5,3,4,2,3,3,3]
// }