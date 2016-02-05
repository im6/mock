var express = require('express'),
    router = express.Router(),
    authCtrl = require("../../auth/controllers/authController.js"),
    dashRootCtrl = require("../controllers/dashRootController.js");



/* GET home page. */

router.all("*", authCtrl.checkAuth);
router.get('/', dashRootCtrl.main);
router.get("/modules", dashRootCtrl.getDashModules);


module.exports = router;