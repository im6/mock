angular.module("app")
    .controller("mainController", [
        "$scope",
        "$rootScope",
        function($scope,$rootScope){
            _.merge($scope, {
                viewModel: "test"
            });
        }])
    .controller("lyt_headCtrl", [
        "$scope",
        "$rootScope",
        function($scope,$rootScope){
            //alert("come to the main controler");
        }])
    .controller("lyt_sidebarCtrl", [
        "$scope",
        "$rootScope",
        function($scope,$rootScope){
        }])
    .controller("lyt_quickbarCtrl", [
        "$scope",
        "$rootScope",
        function($scope,$rootScope){

        }])
    .controller("lyt_footerCtrl", [
        "$scope",
        "$rootScope",
        function($scope,$rootScope){

        }]);