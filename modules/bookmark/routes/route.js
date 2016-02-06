var express = require('express'),
    router = express.Router(),
    globalConfig = require("../../../config/global.js"),
    authCtrl = require("../../auth/controllers/authController.js"),
    bookmarkCtrl = require("../controllers/bookmarkController.js");



/* GET home page. */
if(globalConfig.requireAuth){
    router.all("*", authCtrl.checkAuth);
}
router.get('/', bookmarkCtrl.get);


module.exports = router;