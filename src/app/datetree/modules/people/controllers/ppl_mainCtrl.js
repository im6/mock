/*
* Caption Hover effect
* http://tympanus.net/Tutorials/CaptionHoverEffects/index3.html
* */
angular.module('app')
    .controller('ppl_mainCtrl', [
        '$scope',
        function($scope){
            _.merge($scope,{
                test: 123
            });
        }
    ]);
