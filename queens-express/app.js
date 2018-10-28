const express         = require('express'),
      app             = express(),
      ejs             = require('ejs'),
      methodOverride  = require('method-override'),
      bodyParser      = require('body-parser'),
<<<<<<< HEAD
      passport        = require('passport'),
      mongoose        = require('mongoose'),
      localStrategy   = require('passport-local'),
      User            = require('./models/user');
      
let port = process.env.PORT || 8000,
    indexRoutes = require('./routes/index');
    
let url = process.env.DATABASEURL || "mongodb://" + process.env.IP + "/the_black_code"
// let url = "mongodb://jsurena:jean18@ds111993.mlab.com:11993/the_black_code";
mongoose.connect(url, { useNewUrlParser: true });
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function(){
    console.log("Database connectivity established.");
});
=======
      passport        = require('passport');

      let port = process.env.PORT || 8000,
      indexRoutes = require('./routes/api');
>>>>>>> e41c1aad5e36a089d029a2057980b0b58217c564
      
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

app.listen(port, process.env.IP, function(){
   console.log('Queens Mentor has started.'); 
});


