"use strict";
angular.module("app",[
    "ui.router",
    "ui.bootstrap",
    "ngResource",
    "ngAnimate",
    "btford.socket-io"
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
                })
                .state("chat",{
                    url: "/chat",
                    templateUrl: "/build/datetree/views/chat_main.html",
                    controller: "chat_mainCtrl"
                });
    }])
    .run([
        "$rootScope",
        "$state",
        function($rootScope, $state) {
        }]);