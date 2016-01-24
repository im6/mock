var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

// sudo mongod

module.exports = {
    connect: function(){
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log('=====  dash now connect to mongoose successfully!! =====');
        });
    }

};