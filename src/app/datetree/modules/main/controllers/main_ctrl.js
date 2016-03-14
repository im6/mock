angular.module("app")
    .controller("main_ctrl", [
        "$scope",
        "$rootScope",
        "mainService",
        function($scope,$rootScope, mainService){
            _.merge($scope, {
                viewModel: "test"
            });

            var socket = mainService.socket();
            socket.on("connected", function(res){
                debugger;
                socket.emit("ng_response",{
                    caller: "angualr"
                });
            })
        }]);
