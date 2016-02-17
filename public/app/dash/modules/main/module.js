"use strict";
angular.module("app", [
    "ui.router",
    "ui.bootstrap",
    "oc.lazyLoad",
    "ngSanitize",
    "ngResource",
    "ngAnimate"
])
    .constant('appModulesPath', '/app/dash/modules/')

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
                data: {
                    pageTitle: 'Admin Dashboard Template',
                    pageTitleIcon: 'fa fa-dashboard'
                },
                controller: "dsb_mainController",
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
                            'dsb_mainController'
                        ];
                        setTimeout(function(){
                            mainService.loadModuleDependency('dashboard', ngFileList, fileList, deferred);
                        });
                        return deferred.promise;
                    }]
                }
            })
            .state("bookmark",{
                url: "/bookmark",
                templateUrl: "/app/dash/modules/bookmark/views/main.html",
                data: {
                    pageTitle: 'Bookmark',
                    pageTitleIcon: 'fa fa-book'
                },
                controller: "bm_mainController",
                resolve: {
                    deps: ['mainService','$q', function(mainService, $q) {
                        var deferred = $q.defer();
                        var fileList = [];
                        var ngFileList = [
                            'bm_rscService',
                            'bm_mainController'
                        ];
                        setTimeout(function(){
                            mainService.loadModuleDependency('bookmark', ngFileList, fileList, deferred);
                        });
                        return deferred.promise;
                    }]
                }
            })
            .state("profile",{
                url: "/profile",
                templateUrl: "/app/dash/modules/profile/views/main.html",
                data: {
                    pageTitle: 'User Profile',
                    pageTitleIcon: 'icon-user'
                },
                controller: "prf_mainController",
                resolve: {
                    deps: ['mainService','$q', function(mainService, $q) {
                        var deferred = $q.defer();
                        var fileList = [
                            //"app/dash/css/profile.css"
                        ];
                        var ngFileList = [
                            'prf_rscService',
                            'prf_mainController'
                        ];
                        setTimeout(function(){
                            mainService.loadModuleDependency('profile', ngFileList, fileList, deferred);
                        });
                        return deferred.promise;
                    }]
                }
            })
            .state("friend",{
                url: "/friend",
                templateUrl: "/app/dash/modules/friend/views/main.html",
                data: {
                    pageTitle: 'Friends',
                    pageTitleIcon: 'icon-users'
                },
                controller: "frd_mainController",
                resolve: {
                    deps: ['mainService','$q', function(mainService, $q) {
                        var deferred = $q.defer();
                        var fileList = [
                            //"app/dash/css/profile.css"
                        ];
                        var ngFileList = [
                            'frd_rscService',
                            'frd_mainController'
                        ];
                        setTimeout(function(){
                            mainService.loadModuleDependency('friend', ngFileList, fileList, deferred);
                        });
                        return deferred.promise;
                    }]
                }
            })
            .state("datetree",{
                url: "/datetree",
                templateUrl: "/app/dash/modules/datetree/views/main.html",
                data: {
                    pageTitle: 'DateTree',
                    pageTitleIcon: 'fa fa-tree'
                },
                controller: "dtr_mainController",
                resolve: {
                    deps: ['mainService','$q', function(mainService, $q) {
                        var deferred = $q.defer();
                        var fileList = [
                            "app/dash/css/datetree.css"
                        ];
                        var ngFileList = [
                            'dtr_rscService',
                            'dtr_mainController',
                            'dtr_uploadController'
                        ];
                        setTimeout(function(){
                            mainService.loadModuleDependency('datetree', ngFileList, fileList, deferred);
                        });
                        return deferred.promise;
                    }]
                }
            });


    }])

    .run([
        "$rootScope",
        "$state",
        "socketService",
        function($rootScope, $state, socketService) {

        $rootScope.$state = $state; // state to be accessed from view
        $rootScope.settings = {
            layout: {
                pageSidebarClosed: false, // sidebar menu state
                pageContentWhite: true, // set page content layout
                pageBodySolid: false, // solid body color state
                pageAutoScrollOnLoad: 1000, // auto scroll to top on page load,
                pageQuickSidebarOpen: false
            },
            assetsPath: '/assets/metronic',
            globalPath: '/assets/metronic/global',
            layoutPath: '/assets/metronic/layouts/layout4'
        }; // state to be accessed from view
    }]);