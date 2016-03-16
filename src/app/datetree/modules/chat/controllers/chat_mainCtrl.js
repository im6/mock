angular.module('app')
    .controller('chat_mainCtrl', [
        '$scope',
        function($scope){
            _.merge($scope,{
                test: "this is chat controller",
                msglist:[
                    {msg: "Hey how's it going?", me: false},
                    {msg: "Just send message?", me: true},
                    {msg: "Cool", me: false},
                    {msg: "Soemtime I do that too", me: true},
                    {msg: "I am kinda going blue today", me: false},
                    {msg: "Hey how's going", me: true},
                    {msg: "pretty well, thnks", me: false}
                ]
            });
        }
    ]);
