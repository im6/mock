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
                },
                bookmarkId: function(){
                    return $resource("/dash/bookmark/:id");
                },
                bookmarkId2: function(){
                    return $resource("/dash/bookmark/:id1/:id2");
                }
            };

            return output;

        }
    ]);