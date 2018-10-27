const express    = require('express'),
      router     = express.Router();

router.get('/', function(req, res){
    res.render('home');
});

router.get('/signup', function(req, res){
    res.render('signup');
});

router.post('/signup', function(req, res){
    
});

router.get('/login', function(req, res){
    res.render('login');
});

router.post('/login', function(req, res){
    
});

router.get('/mentorhome', function(req, res){
    res.render('');
});

router.get('/menteehome', function(req, res){
    res.render('');
});

module.exports = router;