angular.module('app')
    .controller('chat_mainCtrl', [
        "$scope",
        "$location",
        "$anchorScroll",
        function($scope,$location,$anchorScroll){
            _.merge($scope,{
                inputMsg: null,
                msglist:[
                    {msg: "Hey how's it going?", me: false},
                    {msg: "Just send message?", me: true},
                    {msg: "Cool", me: false},
                    {msg: "Soemtime I do that too", me: true},
                    {msg: "I am kinda going blue today", me: false},
                    {msg: "Hey how's going", me: true},
                    {msg: "pretty well, thnks", me: false}
                ],
                send: function(){
                    $scope.msglist.push({
                        msg: $scope.inputMsg,
                        me: true
                    });
                    $scope.inputMsg = "";
                    $location.hash('bottomTxt');
                    $anchorScroll();
                },
                sendKey: function(event){
                    var me = $scope;
                    if (event.keyCode === 13){
                        me.send();
                    }

                }
            });
        }
    ]);
