
module.exports = {
    signIn: function(req, res, next){
        console.log('username:' + req.body.username + ";  password: " + req.body.password);
        res.json('good');

    },
    main: function(req, res, next) {
        console.log('coming to login server');
        res.render('auth/login');
    }
};