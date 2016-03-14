var socket = null;

module.exports = {
    init: function(socketInstance){
        socket = socketInstance;
        socket.emit("connected",{
            status :  true,
            clientId: socketInstance.id
        });
        socket.on("ng_response", function(res){
            console.log(res);
        })
    }
};
