var express = require('express');
var app = express.Router();
var Article = require("../models/article.js");

app.get("/api/saved", function(req, res) {

    //  find all the records, 
    
    Article.find({}).limit(5).exec(function(err, data) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(data);
      }
    });
  });
  
  // Redirects user to render React application.
  app.get("*", function(req, res) {
    res.sendFile(__dirname + "../public/index.html");
  });

  app.post("/api/saved", function(req, res) {
    console.log("Article title: " + req.body.title);
    console.log("Article date: " + req.body.date);
    console.log("Article url: " + req.body.url);

    Article.create({
        title: req.body.title,
        date: req.body.date,
        url: req.body.url
      }, function(err) {
        if (err) {
          console.log(err);
        }
        else {
          res.send("Saving Article");
        }
      });
    });

    module.exports = app;