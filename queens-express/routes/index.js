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

router.get('/theland', middleware.isLoggedIn, function(req, res){
    User.findOne({ id: req.user._id }, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            console.log(req.user._id);
            console.log(foundUser);
            if (foundUser.role === 'Mentor'){
                res.redirect('/mentorland');
            } else if (foundUser.role === 'Mentee'){
                res.redirect('/menteeland');
            }
        }
    });
});

router.get('/mentorland', middleware.isLoggedIn, function(req, res){
    // User.findById(req.user._id, function(err, foundUser){
    //     if(err){
    //         console.log(err);
    //     } else {
    //         if (foundUser.role === "Mentor"){
    //             res.render('mentorLand', foundUser);
    //         } else {
    //             res.redirect('/menteeland');
    //         }
    //     }
    // });
    Mentor.findOne({ username: req.user.username }, function(err, foundMentor){
        if(foundMentor === null){
            console.log(err);
        } else {
            console.log(req.user._id);
            console.log(foundMentor);
            res.render('mentorLand', {mentor: foundMentor});
        }
    });
});

router.get('/menteeland', middleware.isLoggedIn, function(req, res){
    // User.findById(req.user._id, function(err, foundUser){
    //     if(err){
    //         console.log(err);
    //     } else {
    //         if (foundUser.role === "Mentee"){
    //             res.render('menteeLand', foundUser);
    //         } else {
    //             res.redirect('/mentorland');
    //         }
    //     }
    // });
    Mentee.findOne({ username: req.user.username }, function(err, foundMentee){
        if(foundMentee === null){
            console.log(err);
        } else {
            console.log(req.user._id);
            console.log(foundMentee);
            res.render('menteeLand', {mentee: foundMentee});
        }
    });
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
           mentor.username = req.user.username;
           mentor.accomplishment1 = req.body.accomp1;
           mentor.accomplishment2 = req.body.accomp2;
           mentor.accomplishment3 = req.body.accomp3;
           mentor.numMentees = 0;
           mentor.mentees = [];
           console.log(mentor);
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
           mentee.username = req.user.username;
           mentee.goal1 = req.body.goal1;
           mentee.goal2 = req.body.goal2;
           mentee.goal3 = req.body.goal3;
           mentee.numMentees = 0;
           mentee.mentors = [];
           mentee.bucketList = [];
           console.log(mentee);
           mentee.save();
           res.redirect('/menteeland');
       }
    });
});

router.get('/login', function(req, res){
    res.render('login');
});

router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/theland",
        failureRedirect: "/login"
    }), function(req, res){
});

router.get("/logout", function(req, res){
   req.logout();
   res.redirect("back");
});

router.get('/newmentorship', function(req, res){
//   Mentor.findById();
//   Mentee.findById();
//   if()
});

module.exports = router;