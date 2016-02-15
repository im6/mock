"use strict";
angular.module('app')
    .controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.$on('$viewContentLoaded', function() {
            App.initComponents(); // init core components
            //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive
        });
    }])

    .controller('HeaderController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {
            Layout.initHeader(); // init header
        });

        _.merge($scope,{
            toggleQuickSideBar: function(bl){

            }
        })
    }])

    .controller('SidebarController', [
        '$scope',
        'dashRootService',
        function($scope,dashRootService) {
            var modules = dashRootService.dashModules().query({},function(res){
                //console.log(res);
            });

            $scope.$on('$includeContentLoaded', function() {
                Layout.initSidebar(); // init sidebar
            });
    }])


    .controller('PageHeadController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {
            Demo.init(); // init theme panel
        });
    }])

    /* Setup Layout Part - Quick Sidebar */
    .controller('QuickSidebarController', [
        '$scope',
        "socketService",
        function($scope,socket) {

            _.merge($scope, {
                viewModel:{
                    userList:[],
                    showDialog: false,
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
                setTimeout(function(){
                    QuickSidebar.init(); // init quick sidebar
                }, 2000);
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


    }])

    /* Setup Layout Part - Theme Panel */
    .controller('ThemePanelController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {
            Demo.init(); // init theme panel
        });
    }])

    /* Setup Layout Part - Footer */
    .controller('FooterController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {
            Layout.initFooter(); // init footer
        });
    }]);