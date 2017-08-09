/**
 * Created by yuan on 2017/8/9.
 */
(function () {
    'use strict';
    angular.module('superComponentRepeatedModule')
        .directive('superComponentRepeated', function () {
            return {
                restrict: 'E',

                scope: true,

                template: '<div>' +
                '   <strong>{{hello}}</strong>' +
                '</div>',

                //even we don't have a ng-transclude in template, while using transclude true, we will got a transcludeFn in post link
                transclude: true,

                //instead of keeping old element, we replace it entirely
                replace: true,

                compile: function (tEle, tAtt) {
                    return function (scope, ele, attrs, nullCtrl, transcludeFn) {
                        scope.hello = 'hello';

                        //here, we modify the "n" variable value here, and pass the modified value (in scope) to the transclude function
                        scope.numberToDisplay = 'world ' + scope.numberToDisplay + ' times!';

                        //while using transclude function, we get the possibility to modify dynamically values in the scope,
                        //which will be used to evaluate the template
                        transcludeFn(scope, function (clone) {
                            ele.append(clone);
                        });
                    }
                }
            };
        })
    ;
})();
