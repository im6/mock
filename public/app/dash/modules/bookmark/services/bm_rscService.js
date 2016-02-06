"use strict";
angular.module('app')
    .factory('bm_rscService', [
        '$resource',
        function ($resource) {

            var privateFn = {
                test: 123
            };

            var output = {
                bookmark: function(){
                    return $resource("/dash/bookmark");
                }
            };

            return output;

        }
    ]);