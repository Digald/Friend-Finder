var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// require API routes
require("./app/routing/apiRoutes.js")(app);
// require HTML routes
require("./app/routing/htmlRoutes.js")(app);

// Server Listening for PORT
app.listen(PORT, function() {
  console.log("Server running on PORT: " + PORT);
});
