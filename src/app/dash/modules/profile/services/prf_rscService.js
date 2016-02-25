"use strict";
angular.module('app.profile')
    .factory('prf_rscService', [
        '$resource',
        function ($resource) {

            var privateFn = {
                test: 123
            };

            var output = {
                get: function(){
                    return $resource("/dash/treephoto");
                }
            };

            return output;

        }
    ]);