var mongoose = require("mongoose"),
    _ = require("lodash"),
    User = require("../models/User.js");


module.exports = {
    getUser: function(req, res, next){
        var userEmail = "";
        return User.find({"_id": 0}).select().exec(function(result){
            res.json(result);
        });

    },
    saveUser: function(req, res, next){
        res.json(true);
    }

};