/*
*
* sidebar url: http://tympanus.net/Tutorials/AnimatedBorderMenus/index2.html
*
* */
angular.module("app")
    .controller("main_sidebarCtrl", [
        "$scope",
        "$rootScope",
        "sidebarService",
        "$timeout",
        function($scope, $rootScope,sidebarService,$timeout){
            setTimeout(function(){
                sidebarService.initSidebar();
            });

            _.merge($scope, {
                showTrigger: false,
                menulist: [
                    {url:"#/people", icon:"fa-users", title:"People"},
                    {url:"#/chat", icon:"fa-paper-plane", title:"Chat"},
                    {url:"#/search", icon:"fa-search", title:"Search"},
                    {url:"#/profile", icon:"fa-paw", title:"Profile"},
                    {url:"#/share", icon:"fa-share-alt", title:"Share"}
                ],
                closeMenu: function(){
                    sidebarService.resetMenu();
                }
            });
            $timeout(function(){
                $scope.showTrigger = true;
            },1000);


        }]);