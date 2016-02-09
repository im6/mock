"use strict";
angular.module('app.datetree')
    .factory('dtr_rscService', [
        '$resource',
        function ($resource) {

            var privateFn = {
                test: 123
            };

            var output = {
                treephoto: function(){
                    return $resource("/dash/treephoto");
                }
            };

            return output;

        }
    ]);