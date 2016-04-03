var express = require('express'),
    router = express.Router(),
    datetreeCtrl = require("../controllers/datetreeController.js");

/* GET home page. */
router.get('/tree', datetreeCtrl.getTree);
router.get('/date', datetreeCtrl.getDate);
router.get('/', datetreeCtrl.main);
router.get('/test', function(req,res,next){
   res.status(404).json({
       status: "ok haha"
   }) ;
});


module.exports = router;