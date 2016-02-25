"use strict";
angular.module('app')
    .controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.$on('$viewContentLoaded', function() {
            App.initComponents(); // init core components
            //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive
        });
    }])

    .controller('HeaderController', [
        '$scope',
        '$rootScope',
        function($scope,$rootScope) {
        $scope.$on('$includeContentLoaded', function() {
            Layout.initHeader(); // init header
        });

        _.merge($scope,{
            toggleSocket: function (bl) {
                $rootScope.settings.layout.pageQuickSidebarOpen = bl;
            },
        })
    }])

    .controller('SidebarController', [
        '$scope',
        'dashRootService',
        function($scope,dashRootService) {
            var modules = dashRootService.dashModules().query({},function(res){
                //console.log(res);
            });

            $scope.$on('$includeContentLoaded', function() {
                Layout.initSidebar(); // init sidebar
            });
    }])


    .controller('PageHeadController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {
            Demo.init(); // init theme panel
        });
    }])

    /* Setup Layout Part - Quick Sidebar */


    /* Setup Layout Part - Theme Panel */
    .controller('ThemePanelController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {
            Demo.init(); // init theme panel
        });
    }])

    /* Setup Layout Part - Footer */
    .controller('FooterController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {
            Layout.initFooter(); // init footer
        });
    }]);