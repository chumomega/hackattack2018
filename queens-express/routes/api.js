const express    = require('express'),
      router     = express.Router();

router.get('/', function(req, res){
    res.render('home');
});

router.get('/register', function(req, res){
    res.render('register');
});

router.post('/register', function(req, res){
    
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