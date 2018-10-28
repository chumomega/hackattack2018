const express         = require('express'),
      app             = express(),
      ejs             = require('ejs'),
      methodOverride  = require('method-override'),
      bodyParser      = require('body-parser'),
      passport        = require('passport'),
      mongoose        = require('mongoose'),
      localStrategy   = require('passport-local'),
      User            = require('./models/user');
      
let port = process.env.PORT || 8000,
    indexRoutes = require('./routes/index');
    
let url = 'mongodb://localhost:27017' + '/mentor_queen';

const dbName = 'myproject';
mongoose.connect(url, { useNewUrlParser: true });
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"), console.log("This is the url: " + url));
db.once("open", function(){
    console.log("Database connectivity established.");
});
      
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use(require("express-session")({
    secret: "Secret message",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(indexRoutes);


function addUser(){

}

function loginUser(){

}

app.listen(port, process.env.IP, function(){
   console.log('Queens Mentor has started.'); 
});


