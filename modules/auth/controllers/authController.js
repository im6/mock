var passport = require("../config/passport");

module.exports = {
    passportLocal: passport.get().authenticate('local', {
        failureRedirect: '/auth'
    }),

    signInSuccess: function(req, res, next){
        res.redirect("/datetree");
    },

    main: function(req, res, next) {
        if(typeof req.user != "undefined"){
            res.redirect("/datetree");
        }else{
            res.render("auth/login");
        }

    },

    checkAuth: function(req, res, next){
        if(typeof req.user != "undefined"){
            next();
        }else{
            res.redirect("/auth");
        }
    }
};