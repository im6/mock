var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('dash/index');
});

router.get('/login', function(req, res, next) {
    res.render('dash/index_login');
});

router.post('/account/login', function(req, res, next) {
    res.redirect('/dash');
});

module.exports = router;