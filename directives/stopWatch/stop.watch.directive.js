/**
 * Created by yuan on 2017/8/3.
 */
(function () {
    'use strict';
    angular.module('stopWatch')
        .directive('stopWatch',
            ['StopWatchService', function (StopWatchService) {
                return {
                    restrict: 'E',
                    templateUrl: 'stop.watch.template.html',
                    scope: {
                        'interval': '='
                    },
                    link: stopWatchLink
                };

                function stopWatchLink(scope, ele, attrs) {
                    scope.$watch(
                        function () {
                            return scope.interval;
                        },
                        function (newVal, oldVal) {
                            if (newVal !== oldVal) {
                                getStopWatch.restart(newVal);
                            }
                        });

                    scope.displayTime = new Date(0);

                    var getStopWatch = new StopWatchService(scope.displayTime, scope.interval);
                    scope.startTimer = getStopWatch.startTimer;
                    scope.stopTimer = getStopWatch.stopTimer;
                }
            }])
    ;
})();
