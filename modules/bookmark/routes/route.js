var express = require('express'),
    router = express.Router(),
    globalConfig = require("../../../config/global.js"),
    authCtrl = require("../../auth/controllers/authController.js"),
    bookmarkCtrl = require("../controllers/bookmarkController.js");


/* GET home page. */
if(globalConfig.requireAuth){
    router.all("*", authCtrl.checkAuth);
}

/*
* github about regexp in the
* http://forbeslindesay.github.io/express-route-tester/
* */

router.get('/', bookmarkCtrl.get);
router.delete("/:id", bookmarkCtrl.delete);
router.delete("/:id1/:id2", bookmarkCtrl.delete2);
router.post("/:id1/:id2", bookmarkCtrl.post2);
router.post("/:id", bookmarkCtrl.update);


module.exports = router;