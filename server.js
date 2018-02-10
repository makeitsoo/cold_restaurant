// backend team

// required modules
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var jquery = require("jquery");

// Sets up the express server & port
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routes/htmlroutes.js")(app);
require("./routes/apiroutes.js")(app);

// reservations arr
var reservations = [];


// Routes
// =============================================================
// Basic routes that send the user to the various HTML pages based on URL
app.get("/", homeURL);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));

  });
  
  app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });
  
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

// ajax post request when user submits form (on click event)
$('add-button').on('click', function(event){
  event.preventDefault();
  alert("You've been added to the list"); // should check if you're on wait list

  // inside the post, push to the array of reservations
  reservations.push(
    
  )
  console.log(reservations);

  // route to tables.html


})

// ajax get request when loading tables page
// break up array into 5 tables + remainder in wait list
// 

// app.post reservations array contents to front end in JSON



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


