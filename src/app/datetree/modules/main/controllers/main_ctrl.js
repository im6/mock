angular.module("app")
    .controller("main_ctrl", [
        "$scope",
        "$rootScope",
        function($scope,$rootScope){
            _.merge($scope, {
                viewModel: "test"
            });
        }]);
