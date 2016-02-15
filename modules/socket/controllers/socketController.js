var privateFn = {
    socket: null,
    onConnection: function(socket){
        var me = privateFn;
        me.socket = socket;
        socket.on("msg/new", me.onNewMsg);
        socket.on("user/get", me.onloadUsers);
        socket.on("user/add", me.onAddUser);
        console.log("just finished binding");

    },
    onAddUser: function(username){
        var me = privateFn;
        console.log("new user name is: " + username);
        me.socket.emit('user/new', {
            name: username,
            msgCnt: 1,
            desc: "Chase CEO"
        });
    },
    onTyping: function(){

    },
    onDisconnect: function(){

    },
    onNewMsg: function(data){
        var me = privateFn;
        me.socket.broadcast.emit('msg/new', {
            username: socket.username,
            message: data
        });
    },

    onloadUsers: function(){
        var me = privateFn;
        var users = [];
        for(var oneid in me.socket.server.sockets.connected){
            if(me.socket.server.sockets.connected.hasOwnProperty(oneid)){
                users.push({
                    id: oneid,
                    name: oneid,
                    desc: oneid,
                    msgCnt: 0
                });
            }
        }

        me.socket.emit('user/all', {
            data: users
        });
    }
};
module.exports = {
    init: function(io){
        io.on('connection', privateFn.onConnection);
    }
};