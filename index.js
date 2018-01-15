//Require the stuff I need, make any global variables I need
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts");
var app = express();

//Set and use statements to set up middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + "/public/"));


//Controller
app.use("/problems", require("./controllers/problems.js"));
app.use("/topics", require("./controllers/topics.js"));

//Routes
app.get("/", function(req, res) {
  res.render("home");
});

//Listen on port 3000
app.listen(3000);