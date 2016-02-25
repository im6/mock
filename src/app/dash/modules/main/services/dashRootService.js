"use strict";
angular.module('app')
    .factory('dashRootService', [
        '$resource',
        function ($resource) {

            var privateFn = {
                test: 123
            };

            var output = {
                dashModules: function(){
                    return $resource("/dash/modules");
                }
            };

            return output;

        }
    ]);