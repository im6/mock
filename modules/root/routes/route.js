var express = require('express'),
    router = express.Router(),
    rootCtrl = require("../controllers/rootController.js");

/* GET home page. */
router.get('/', rootCtrl.main);

module.exports = router;