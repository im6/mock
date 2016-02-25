"use strict";
angular.module('app.friend')
    .factory('frd_rscService', [
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