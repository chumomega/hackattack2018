const express    = require('express'),
      router     = express.Router(),
      User       = require('../models/user'),
      Mentor     = require('../models/mentor'),
      Mentee     = require('../models/mentee'),
      middleware = require('../middleware'),
      passport   = require('passport');

router.get('/', function(req, res){
    res.render('home');
});

router.get('/aboutus', function(req, res){
    res.render('aboutus');
});

router.get('/mentorland', middleware.isLoggedIn, function(req, res){
    Mentor.findById(req.user._id, )
    res.render('mentorLand');
});

router.get('/menteeland', function(req, res){
    res.render('menteeLand');
});

router.get('/register', function(req, res){
    res.render('register');
});

router.post('/register', function(req, res){
    if (req.body.role === "Mentor"){
        let newUser = new User(
            {
                username: req.body.username, 
                email: req.body.email,
                city: req.body.city,
                state: req.body.state,
                biography: "",
                role: "Mentor" 
            });
        User.register(newUser, req.body.password, function(err, user){
            if(err){
                console.log(err);
                return res.render("register");
            }
            passport.authenticate("local")(req, res, function(){
                res.redirect('/mentorregister');
            });
        });
        
    } else if (req.body.role === "Mentee") {
        let newUser = new User(
            {
                username: req.body.username, 
                email: req.body.email,
                city: req.body.city,
                state: req.body.state,
                biography: "",
                role: "Mentee" 
            });
        User.register(newUser, req.body.password, function(err, user){
            if(err){
                console.log(err);
                return res.render("register");
            }
            passport.authenticate("local")(req, res, function(){
                res.redirect('/menteeregister');
            });
        });
    } else {
        res.redirect('/');
    }
});

router.get('/mentorregister', function(req, res){
   res.render('mentorregister'); 
});

router.post('/mentorregister', function(req, res){
    Mentor.create({}, function(err, mentor){
       if(err){
           console.log(err);
           res.redirect("back");
       } else {
           mentor.user.id = req.user._id;
           mentor.user.username = req.user.username;
           mentor.accomplishment1 = req.body.accomp1;
           mentor.accomplishment2 = req.body.accomp2;
           mentor.accomplishment3 = req.body.accomp3;
           mentor.numMentees = 0;
           mentor.mentees = [];
           mentor.save();
           res.redirect('/mentorland');
       }
    });
});

router.get('/menteeregister', function(req, res){
    res.render('menteeregister');
});

router.post('/menteeregister', function(req, res){
    Mentee.create({}, function(err, mentee){
       if(err){
           console.log(err);
           res.redirect("back");
       } else {
           mentee.user.id = req.user._id;
           mentee.user.username = req.user.username;
           mentee.goal1 = req.body.goal1;
           mentee.goal2 = req.body.goal2;
           mentee.goal3 = req.body.goal3;
           mentee.numMentors = 0;
           mentee.mentors = [];
           mentee.save;
           res.redirect('menteeLand')
       }
    });
});

router.get('/login', function(req, res){
    res.render('login');
});

router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/mentorland",
        failureRedirect: "/login"
    }), function(req, res){
});

router.get('/mentorhome', function(req, res){
    res.render('');
});

router.get('/menteehome', function(req, res){
    res.render('');
});

router.get("/logout", function(req, res){
   req.logout();
   res.redirect("back");
});

module.exports = router;