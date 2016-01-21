var users = [
    {
        id: 1,
        name: 'user1'
    },
    {
        id: 2,
        name: 'user2'
    }];
var _ = require('lodash');
exports.localAuth = function(req, res){
    debugger;
    var result = _.some(users, {
        id: 1,
        name: 'test'
    });
    if(result){
        res.send({
            message: "success"
        });
    }else{
        res.json({
            message: "failed"
        });
    }
};