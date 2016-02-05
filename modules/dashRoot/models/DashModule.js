var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DashModuleSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true
    }
});

module.exports =  mongoose.model('DashModule', DashModuleSchema);