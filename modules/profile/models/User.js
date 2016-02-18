var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var emailValidator = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

var nameValidator1 = function(d){
    return d.length > 3 && d.length < 50;
};


var UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: '',
        trim: true,
        validate: [
            {
                validator: nameValidator1,
                message: 'Name should be between 3 and 50 characters'
            }
        ]
    },
    email:{
        type: String,
        trim: true,
        unique: true,
        required: true,
        validate: [emailValidator, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                var list = [0,1,2];
                return list.indexOf(v) > -1;
            },
            message: '{VALUE} is not a valid status number!'
        }
    },
    gender:{
        // woman: false, man true;
        required: true,
        type: Boolean
    },
    dob:{
        type:Date
    }
});

module.exports =  mongoose.model('User', UserSchema);