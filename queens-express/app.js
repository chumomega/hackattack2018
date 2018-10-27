const express         = require('express'),
      app             = express(),
      ejs             = require('ejs'),
      methodOverride  = require('method-override'),
      bodyParser      = require('body-parser'),
      passport        = require('passport');
      
let port = process.env.PORT || 8000,
    indexRoutes = require('./routes/index');
      
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use(require("express-session")({
    secret: "Secret message",
    resave: false,
    saveUninitialized: false
}));

app.use(indexRoutes);

app.listen(port, process.env.IP, function(){
   console.log('Queens Mentor has started.'); 
});