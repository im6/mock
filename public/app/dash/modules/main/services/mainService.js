"use strict";
angular.module('app')
    .factory('mainService', [
        '$q',
        '$interval',
        '$ocLazyLoad',
        '$rootScope',
        'appModulesPath',
        function ($q, $interval, $ocLazyLoad, $rootScope, appModulesPath) {
            var privateFn = {
                checkModuleExist: function(moduleName){
                    return $ocLazyLoad.getModules().indexOf('app.' + moduleName) > -1;

                },
                getFileType: function (value) {
                    var name = null;
                    if (/Controller$/.test(value)) {
                        name = 'controllers';
                    } else if (/Service$/.test(value)) {
                        name = 'services';
                    } else if (/Filter$/.test(value)) {
                        name = 'filters';
                    } else if (/Directive$/.test(value)) {
                        name = 'directives';
                    } else {
                        name = null;
                        console.error('Invalid naming convention in filename.');
                    }
                    return name;
                },
                generateLazyloadList: function (moduleid, nglist, nonNgList) {
                    var me = this;
                    var result = [];
                    angular.forEach(nglist, function (value, key) {
                        var typename = '/' + me.getFileType(value) + '/';
                        var fileUrl = appModulesPath + moduleid + typename + value + '.js';
                        result.push(fileUrl);
                    });

                    if (nonNgList && angular.isArray(nonNgList)) {
                        angular.forEach(nonNgList, function (value1, key1) {
                            result.push(value1);
                        });
                    }

                    result.concat(nonNgList);
                    return result;
                }


            };

            return {
                loadModuleDependency: function(moduleName, ngfileList, otherList, defered){
                    var isLoaded = privateFn.checkModuleExist(moduleName);
                    if(isLoaded){
                        $ocLazyLoad.load({
                            name: 'app.' + moduleName,
                            insertBefore: '#ng_load_plugins_before',
                            files: privateFn.generateLazyloadList(moduleName, ngfileList, otherList)
                        }).then(function(res){
                            defered.resolve();
                        });
                    }else{
                        var moduleUrl = appModulesPath + moduleName + '/module.js';
                        $ocLazyLoad.load({
                            name: 'App',
                            insertBefore: '#ng_load_plugins_before',
                            files: [moduleUrl]
                        }).then(function(res){
                            $ocLazyLoad.load({
                                name: 'app.' + moduleName,
                                insertBefore: '#ng_load_plugins_before',
                                files: privateFn.generateLazyloadList(moduleName, ngfileList, otherList)
                            }).then(function(res){
                                defered.resolve();
                            });
                        });
                    }


                }
            }
        }
    ])
    .factory('settings', ['$rootScope', function($rootScope) {
        // supported languages
        var settings = {
            layout: {
                pageSidebarClosed: false, // sidebar menu state
                pageContentWhite: true, // set page content layout
                pageBodySolid: false, // solid body color state
                pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
            },
            assetsPath: '/assets/metronic',
            globalPath: '/assets/metronic/global',
            layoutPath: '/assets/metronic/layouts/layout4',
        };

        $rootScope.settings = settings;
        return settings;
    }]);
