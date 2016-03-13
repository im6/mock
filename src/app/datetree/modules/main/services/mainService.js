angular.module("app")
    .service('mainService',[
        "$rootScope",
        "utilityService",
        "socketFactory",
        function($rootScope, utilityService,socketFactory){
            var privateFn = {
            };

            var output = {
                socket: function(){
                    return socketFactory();
                }

            };

            return output;
    }]);
