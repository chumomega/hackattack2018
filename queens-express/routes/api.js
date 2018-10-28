const express    = require('express'),
      router     = express.Router();

router.get('/', function(req, res){
    res.render('home');
});

router.get('/register', function(req, res){
    res.render('register');
});

router.get('/aboutus', function(req, res){
    res.render('aboutus');
});

router.post('/register', function(req, res){
    
});

router.get('/login', function(req, res){
    res.render('login');
});

router.post('/login', function(req, res){
    
});

router.get('/mentorhome', function(req, res){
    res.render('mentorLand');
});

router.get('/menteehome', function(req, res){
    res.render('menteeLand');
});

module.exports = router;