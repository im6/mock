var mongoose = require("mongoose"),
    DashModule = require("../models/DashModule.js");


//var newModule = new DashModule({
//    name: "React"
//});
//
//console.log(newModule.name);
//newModule.save(function(err, res){
//    if(err){
//        console.error(err);
//    }else{
//        console.log("success in save Modules: " + newModule.name);
//    }
//});

module.exports = {
    getDashModules: function(req, res, next) {
        DashModule.find(function(err, data){
            if(err){
                console.error(err);
            } else{
                console.log(data);
                var modules = ["a1", "a2", "a3"];
                res.json(data);
            }
        });

    },
    main: function(req, res, next){
        res.render("dash/index");
    }
};