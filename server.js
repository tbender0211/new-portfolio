var express = require("express");
var bodyParser = require("body-parser");
// var mongoose = require("mongoose");
var request = require("request");
// var cheerio = require("cheerio");
var logger = require("morgan");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(logger("dev"));
//bodyparser for handling form submissions
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Handlebars stuff
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//HTML routes
var routes = require("./routes/htmlRoutes");
app.use(routes);

app.get("/", function(req, res) {
    res.render("index");
});


//start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + ".");
});
