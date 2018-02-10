// backend team

// required modules
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the express server & port
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// reservations arr
var reservations = [];


// Routes
// =============================================================
// Basic routes that send the user to the various HTML pages based on URL
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });
  
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });


// app.post reservations array contents to front end in JSON



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


