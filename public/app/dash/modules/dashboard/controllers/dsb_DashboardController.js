"use strict";
angular.module('app.dashboard')
    .controller('dsb_DashboardController',[
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
        }]
    );