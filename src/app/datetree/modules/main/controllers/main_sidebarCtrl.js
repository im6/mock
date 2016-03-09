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
        function($scope, $rootScope,sidebarService){
            setTimeout(function(){
                sidebarService.initSidebar();
            });

            _.merge($scope, {
                closeMenu: function(){
                    sidebarService.resetMenu();
                }
            });
        }]);