"use strict";
angular.module('app.friend')
    .controller('frd_mainController',[
        "$rootScope",
        "$scope",
        function($rootScope, $scope) {
            $scope.$on('$viewContentLoaded', function() {
                // initialize core components
                App.initAjax();
            });

            // set sidebar closed and body solid layout mode
            $rootScope.settings.layout.pageContentWhite = true;
            $rootScope.settings.layout.pageBodySolid = false;
            $rootScope.settings.layout.pageSidebarClosed = false;

            _.merge($scope, {

            });

        }]
);