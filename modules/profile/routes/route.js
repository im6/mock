var express = require('express'),
    router = express.Router(),
    ctrl = require("../controllers/profileController.js");

/* GET home page. */
router.get('/user', ctrl.getUser);
router.post('/user', ctrl.saveUser);


module.exports = router;