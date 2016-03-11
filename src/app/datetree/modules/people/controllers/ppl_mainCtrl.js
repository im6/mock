/*
* Caption Hover effect
* http://tympanus.net/Tutorials/CaptionHoverEffects/index3.html
* */
angular.module('app')
    .controller('ppl_mainCtrl', [
        '$scope',
        function($scope){
            var urllist = [
                "http://www.nyunews.com/wp-content/uploads/2016/03/jenny1-900x600.jpg",
                "http://media.npr.org/assets/img/2016/03/09/06242015_sanders_npr_0003edit_custom-25e8f0e973c632b2fc5ff61e00a102f1b60fb16b-s1600-c85.jpg",
                "https://d13yacurqjgara.cloudfront.net/users/185048/screenshots/2581110/lemur_animation_reel_2x.gif",
                "https://d13yacurqjgara.cloudfront.net/users/185048/screenshots/2572944/dragonfly_animation_reel_3x.gif",
                "https://d13yacurqjgara.cloudfront.net/users/1064049/screenshots/2581709/car-dribbble.jpg",
                "https://img.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2015/05/15/National-Politics/Images/2016_Trail_Translator_Income_Inequality-01f0f.jpg?uuid=0H2sdPtUEeSe9Bu3zjs_tw",
                "http://static6.businessinsider.com/image/55918b77ecad04a3465a0a63/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg",
                "https://d13yacurqjgara.cloudfront.net/users/432278/screenshots/2581309/bb8.jpg"
            ];
            _.merge($scope,{
                test: 123,
                boxlist: []
            });


            _.each(urllist, function(ele, key){
               $scope.boxlist.push({
                   imgUrl:ele,
                   id:key,
                   age: key * 4,
                   isMale: key % 2,
                   name:"George"+key
               });
            });

        }

    ]);
