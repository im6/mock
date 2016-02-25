angular.module('app')
    .controller('QuickSidebarController', [
        '$scope',
        "$rootScope",
        "$timeout",
        "socketService",
        function($scope,$rootScope,$timeout,socket) {

            _.merge($scope, {
                viewModel: {
                    userList: [],
                    currentDialog: [],
                    isConvShow: false,
                    currentMsg: ''
                },
                toggleSocket: function (bl) {
                    $rootScope.settings.layout.pageQuickSidebarOpen = bl;
                },
                toggleConversation: function (bl) {
                    var me = $scope;
                    me.viewModel.isConvShow = bl;
                },

                keyPost: function (event) {
                    if (event.which === 13) {
                        createMsgPost(true, $scope.viewModel.currentMsg);
                        $scope.viewModel.currentMsg = '';


                        $timeout(function() {
                            createMsgPost(false);
                        },1000);
                    }

                },
                mousePost: function () {
                    createMsgPost(true, $scope.viewModel.currentMsg);
                    $scope.viewModel.currentMsg = '';
                    $timeout(function () {
                        createMsgPost(false);
                    }, 1000);
                },

                toggleDialog: function(bl){
                    var me = $scope;
                    me.viewModel.showDialog = bl;
                },
                test: function(){
                    socket.emit('user/get');
                }
            });

            $scope.$on('$includeContentLoaded', function() {

            });
            socket.on("connect", function(data){

                socket.on("msg/new", function(data){
                    debugger;
                });


                socket.on("user/new", function(data){
                    $scope.viewModel.userList.push(data);
                });

                socket.on("user/all", function(res){
                    $scope.viewModel.userList = res.data;

                });

                socket.emit('user/add', "testuser");

            });

            var createMsgPost = function (isOut, msg) {
                var d = new Date();
                var d1 = d.getUTCMinutes();
                var d2 = d.getUTCHours();

                $scope.viewModel.currentMsg = '';
                var result = {
                    isOut: isOut,
                    name: isOut? 'Tim McGraw' : 'Bob Nilson',
                    time: d2 + ":" + d1,
                    msg: msg? msg : "Really?"
                };

                $scope.viewModel.currentDialog.push(result);
            };
            _.times(6, function (key) {
                $scope.viewModel.userList.push({
                    id: key,
                    name: "Ben Carson " + key,
                    desc: "doctor " + key * 100,
                    msgCnt: 0
                });
            });

            _.times(2, function (key) {
                var isOut = key % 2 === 0;
                createMsgPost(isOut, "haha sadfasf dssadfas fdssadfa sfdssa dfasf dssadfasfdssa" + key * 2);
            });

            var initChatSlimScroll = function () {
                var wrapper = $('.page-quick-sidebar-wrapper');
                var wrapperChat = wrapper.find('.page-quick-sidebar-chat');
                var chatUsers = wrapper.find('.page-quick-sidebar-chat-users');
                var chatUsersHeight;
                chatUsersHeight = wrapper.height() - wrapper.find('.nav-tabs').outerHeight(true);
                // chat user list
                App.destroySlimScroll(chatUsers);
                chatUsers.attr("data-height", chatUsersHeight);
                App.initSlimScroll(chatUsers);

                var chatMessages = wrapperChat.find('.page-quick-sidebar-chat-user-messages');
                var chatMessagesHeight = chatUsersHeight - wrapperChat.find('.page-quick-sidebar-chat-user-form').outerHeight(true);
                chatMessagesHeight = chatMessagesHeight - wrapperChat.find('.page-quick-sidebar-nav').outerHeight(true);

                // user chat messages
                App.destroySlimScroll(chatMessages);
                chatMessages.attr("data-height", chatMessagesHeight);
                App.initSlimScroll(chatMessages);
            };

            setTimeout(function () {
                initChatSlimScroll();
                App.addResizeHandler(initChatSlimScroll);
            },1800);


        }]);