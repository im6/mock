angular.module('app')
    .controller('chat_mainCtrl', [
        '$scope',
        function($scope){
            _.merge($scope,{
                test: "this is chat controller"
            });
        }
    ]);
