
angular.module("app")
    .controller("main_sidebarCtrl", [
        "$scope",
        "$rootScope",
        "sidebarService",
        function($scope, $rootScope,sidebarService){
            _.merge($scope, {
                closeMenu: function(){
                    sidebarService.resetMenu();
                }
            });
        }]);