var passport = require('passport'),
    Strategy = require('passport-local').Strategy;

module.exports = {
    initial: function(){
        passport.serializeUser(function(user, cb) {
            cb(null, user.id);
        });

        passport.deserializeUser(function(id, cb) {
            var user = {
                id: "xj1",
                name: "xiaojiDs1"
            };
            cb(null, user);
        });

        passport.use(new Strategy(
                {
                    session: true,
                    passReqToCallback: true
                },
            function(req, username, password, done) {
                if(username == "xiaoji"){
                    return done(null, {
                        id: "xj2",
                        name: "xiaojiDs2"
                    });
                }else{
                    return done(null, false);
                }
            }
        ));

        return passport;

    },
    get: function(){
        return passport;
    }
};