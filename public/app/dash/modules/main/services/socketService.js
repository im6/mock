"use strict";
angular.module('app')
    .factory('socketService', [
        '$rootScope',
        function ($rootScope) {
            var socket = io.connect();
            var privateFn = {
                test: 123
            };

            var output = socket;

            return output;

        }
    ]);