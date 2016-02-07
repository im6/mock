var mongoose = require("mongoose"),
    _ = require("lodash"),
    BookmarkModel = require("../models/Bookmark.js");


module.exports = {
    get: function(req, res, next){
        BookmarkModel.find(function(err, data){
            if(err){
                console.error(err);
            }else{
                var result = _.map(data, function(value){
                    return{
                        name: value.name,
                        id: value.id,
                        url:value.url,
                        created: value.created
                    };
                });

                res.json(result);
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
    update: function(req, res, next){
        debugger;
        console.log("udpate the records of id = " + req.params.id);

    },
    delete: function(req, res, next){
        console.log("coming to delete id = " + req.params.id);
        res.end();
    },
    delete2: function(req, res, next){
        console.log("coming to delete id1 = " + req.params.id1 + "; id2= " + req.params.id2);
        res.end();
    },
    post2: function(req, res, next){
        var params = req.params;
        var body = req.body;
        var query = req.query;
        debugger;
        res.end();
    }
};
