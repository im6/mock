var privateFn = {
    socket: null,
    onConnection: function(socket){
        var me = privateFn;
        me.socket = socket;
        console.log("just connected");
        socket.on("newMsg", me.onNewMsg);
        socket.on("addUser", me.onAddUser);
        console.log("just finished binding");

    },
    onAddUser: function(username){
        var me = privateFn;
        console.log(username);
        me.socket.broadcast.emit('newMsg', {
            message: username
        });
    },
    onTyping: function(){

    },
    onDisconnect: function(){

    },
    onNewMsg: function(data){
        var me = privateFn;
        me.socket.broadcast.emit('newMsg', {
            username: socket.username,
            message: data
        });
    }
};
module.exports = {
    init: function(io){
        io.on('connection', privateFn.onConnection);
    }
};