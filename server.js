const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3030;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./public"));
}
// Add routes, both API and view
//app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
   // useMongoClient: true
   useNewUrlParser: true
  }
);

  /*DB 
    const db =require('./models')
    const { Article } = db
    Article.create({
        title: "Manual Insert",
        url: "http://exmaple.org/insert"
    }).then(x => console.log(x))
      .catch(x => console.error(x))
    //console.log(db.Article);
  End DB */
  
  var db = mongoose.connection;
     db.on("error",function(err){
      console.log("Momgoose Error", err);
     });

     
     db.on("open",function(){
      console.log("connection working");
     });
  /** Routes */
     const routes = require("./controller/articlecontroller.js");
     app.use(routes);
/** End Routes */

//API Routes
  
// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
