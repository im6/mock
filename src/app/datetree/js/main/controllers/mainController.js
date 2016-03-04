angular.module("app")
    .controller("mainController", [
        "$scope",
        "$rootScope",
        function($scope,$rootScope){
            alert("come to the main controler");
        }]);