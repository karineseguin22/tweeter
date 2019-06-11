/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
var express = require("express");
var app = express();
var PORT = 8080;

const bodyParser = require("body-parser");
app.arguments(bodyParser.urlencoded({extneded: true})); 

app.post("/tweets", (req, res) => {
    console.log(req.body); 
    //const tweet = req.body
    res.direct("/tweets");
}); 