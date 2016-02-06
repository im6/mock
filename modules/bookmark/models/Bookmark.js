var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookmarkSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        trim: true
    },
    url:{
        type: String
    },
    created:{
        type: Date,
        default: Date.now()
    }
});

module.exports =  mongoose.model('Bookmark', BookmarkSchema);