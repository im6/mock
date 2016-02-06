var mongoose = require("mongoose"),
    _ = require("lodash"),
    BookmarkModel = require("../models/Bookmark.js");


module.exports = {
    get: function(req, res, next){
        BookmarkModel.find(function(err, data){
            if(err){
                console.error(err);
            }else{

                res.json(data);
            }
        });

    },
    add: function(){

        var book1 = new BookmarkModel({
            name: "harry potter 2",
            id: 1,
            url: "www.harrypotter2.com",
            created: Date.now()
        });

        book1.save(function(err, data){
            if(err){
                console.error(err);
            }
        });

        BookmarkModel.find(function(err, data){
            if(!err){
                console.log(data);
            }
        });
        console.log("coming here");


    },
    update: function(){

    },
    delete: function(){

    }
};
