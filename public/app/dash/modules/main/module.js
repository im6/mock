"use strict";
angular.module("app", [
    "ui.router",
    "ui.bootstrap",
    "oc.lazyLoad",
    "ngSanitize",
    //"ngAnimate"
])
    .constant('igps_appModulesPath', '/app/dash/modules/')
    .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug: true
        });
    }])
    .config(['$controllerProvider', function($controllerProvider) {
        $controllerProvider.allowGlobals();
    }])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        // Redirect any unmatched url
        $urlRouterProvider.otherwise("/dashboard");
        $stateProvider
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: "/app/dash/modules/dashboard/views/main.html",
                data: {pageTitle: 'Admin Dashboard Template'},
                controller: "dsb_DashboardController",
                resolve: {
                    deps: ['mainService','$q', function(mainService, $q) {
                        var deferred = $q.defer();
                        var fileList = [
                            '/assets/metronic/pages/scripts/dashboard.min.js',
                            '/assets/metronic/global/plugins/morris/morris.css',
                            '/assets/metronic/global/plugins/morris/morris.min.js',
                            '/assets/metronic/global/plugins/morris/raphael-min.js',
                        ];
                        var ngFileList = [
                            'dsb_DashboardController',
                        ];
                        setTimeout(function(){
                            mainService.loadModuleDependency('dashboard', ngFileList, fileList, deferred);
                        });
                        return deferred.promise;
                    }]
                }
            })
    }])

    .run(["$rootScope", "settings", "$state", function($rootScope, settings, $state) {
        $rootScope.$state = $state; // state to be accessed from view
        $rootScope.$settings = settings; // state to be accessed from view
    }]);