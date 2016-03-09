"use strict";
angular.module("app",[
    "ui.router",
    "ui.bootstrap",
    "ngResource",
    "ngAnimate"
])
    .config(['$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/people");
            $stateProvider
                .state("people",{
                    url: "/people",
                    templateUrl: "/build/datetree/views/ppl_main.html",
                    controller: "ppl_mainCtrl"
                });
    }])
    .run([
        "$rootScope",
        "$state",
        "sidebarService",
        function($rootScope, $state, sidebarService) {
            sidebarService.initSidebar();
        }]);