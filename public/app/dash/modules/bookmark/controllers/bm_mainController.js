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
                test: "zijian GUO"
            });

            bm_rscService.bookmark().query(function(res){
                $scope.viewModel.books = _.map(res, function(value){
                    return{
                        name: value.name,
                        id: value.id,
                        url:value.url,
                        created: value.created
                    };
                });
            });

        }]
);