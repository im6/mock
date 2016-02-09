"use strict";
angular.module('app.bookmark')
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
                    return $resource("/dash/bookmark/:id1/:id2",
                        {
                            /*
                            * id1 matchs exactlly as id1 above
                            * strId1 matchs the json in the reference first signitures
                            * if matches strId1 then put on params
                            * otherwise put on the layload
                            * */

                            id1: "@param1",
                            id2: "@param2"
                        },
                        {
                            updateBook:{
                                method: "post",
                                params:{
                                    query1:"@query1"
                                }
                            }
                        }
                    );
                }
            };

            return output;

        }
    ]);