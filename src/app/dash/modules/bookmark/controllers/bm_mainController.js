"use strict";
angular.module('app.bookmark')
    .controller('bm_mainController',[
        "$rootScope",
        "$scope",
        "bm_rscService",
        function($rootScope, $scope, bm_rscService) {
            $scope.$on('$viewContentLoaded', function() {
                // initialize core components
                App.initAjax();
            });

            // set sidebar closed and body solid layout mode
            $rootScope.settings.layout.pageContentWhite = true;
            $rootScope.settings.layout.pageBodySolid = false;
            $rootScope.settings.layout.pageSidebarClosed = false;

            _.merge($scope,{
                viewModel:{
                    books: null
                },
                delete: function(id){
                    bm_rscService.bookmarkId2().updateBook({
                        param1: "77771",
                        param2: "77772",
                        query1: "this is query",
                        body:{
                            test: "body1"
                        }
                    },function(res){
                        alert(res);
                    });
                },
                update: function(id){
                    bm_rscService.bookmarkId().delete({
                        id: id
                    },function(res){
                        debugger;
                    });
                }
            });

            bm_rscService.bookmark().query(function(res){
                $scope.viewModel.books = res;
            });

        }]
);