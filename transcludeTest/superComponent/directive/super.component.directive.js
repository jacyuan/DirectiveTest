/**
 * Created by yuan on 2017/8/9.
 */
(function () {
    'use strict';
    angular.module('superComponentModule')
        .directive('superComponent', function () {
            return {
                restrict: 'E',

                scope: true,

                template: '<div>' +
                '   <strong>{{hello}}</strong>' +
                '   <span ng-transclude></span>' +
                '</div>',

                transclude: true,

                link: function (scope, ele, attrs) {
                    scope.hello = 'hey from directive';
                }
            };
        })
    ;
})();
