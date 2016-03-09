angular.module('app')
    .controller('ppl_mainCtrl', [
        '$scope',
        function($scope){
            _.merge($scope,{
                test: 123
            });
        }
    ]);
