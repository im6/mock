angular.module("app")
    .controller("mainController", [
        "$scope",
        "$rootScope",
        function($scope,$rootScope){
            _.merge($scope, {
                viewModel: "test"
            });
        }])
    .controller("lyt_footerCtrl", [
        "$scope",
        "$rootScope",
        function($scope,$rootScope){

        }]);