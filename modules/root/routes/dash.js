var express = require('express');
var router = express.Router();
var auth = require("../../auth/controllers/authController.js");
/* GET home page. */

router.all("*", auth.checkAuth);
router.get('/', function(req, res, next) {
    res.render('dash/index');
});

module.exports = router;