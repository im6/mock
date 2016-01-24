var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('homepage/index');
});

router.get('/cn', function(req, res, next) {
    res.render('homepage/index_cn');
});

module.exports = router;