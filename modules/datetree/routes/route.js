var express = require('express'),
    router = express.Router(),
    datetreeCtrl = require("../controllers/datetreeController.js");

/* GET home page. */
router.get('/tree', datetreeCtrl.getTree);
router.get('/date', datetreeCtrl.getDate);
router.get('/', datetreeCtrl.main);


module.exports = router;