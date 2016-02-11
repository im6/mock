"use strict";
angular.module('app.datetree')
    .controller('dtr_mainController',[
        "$rootScope",
        "$scope",
        "$http",
        "$timeout",
        function($rootScope, $scope, $http, $timeout) {
            $scope.$on('$viewContentLoaded', function() {
                // initialize core components
                App.initAjax();
            });

            // set sidebar closed and body solid layout mode
            $rootScope.settings.layout.pageContentWhite = true;
            $rootScope.settings.layout.pageBodySolid = false;
            $rootScope.settings.layout.pageSidebarClosed = false;

            _.merge($scope, {
                viewModel:{
                    list:[]
                },
                add: function(){
                    var newid = $scope.viewModel.list.length;
                    $scope.viewModel.list.push({
                        id:newid
                    })
                },
                delete: function(id){
                    if(typeof id == "undefined"){
                        id = $scope.viewModel.list.length - 1;
                    }
                    $scope.viewModel.list = _.remove($scope.viewModel.list, function(n){
                        return n.id != id;
                    });

                }
            });

            _.times(7, function(key){
                $scope.viewModel.list.push({
                    id : key
                })
            })



        }]
);