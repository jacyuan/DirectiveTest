/**
 * Created by yuan on 2017/8/3.
 */
(function () {
    'use strict';
    angular.module('stopWatch')
        .directive('stopWatch', ['$interval', function ($interval) {
            return {
                restrict: 'E',
                templateUrl: 'stop.watch.template.html',
                scope: {
                    'interval': '='
                },
                link: stopWatchLink
            };

            function stopWatchLink(scope, ele, attrs) {
                var vm = scope;

                scope.$watch(
                    function () {
                        return scope.interval;
                    },
                    function (newVal, oldVal) {
                        if (newVal !== oldVal) {
                            restart(newVal);
                        }
                    });

                var startTime, interval;

                vm.displayTime = new Date(0);
                vm.startTimer = startTimer;
                vm.stopTimer = stopTimer;
                vm.started = false;


                function restart() {
                    stopTimer();
                    startTimer();
                }

                function startTimer() {
                    if (vm.started === false) {
                        console.log('startTimer');

                        startTime = new Date().getTime();

                        interval = $interval(updateDisplayTime, vm.interval);

                        vm.started = true;
                    }
                }

                function stopTimer() {
                    if (vm.started) {
                        console.log('stopTimer');
                        vm.displayTime.setTime(0);
                        $interval.cancel(interval);
                        vm.started = false;
                    }
                }

                function updateDisplayTime() {
                    console.log('update');
                    var currentTime = new Date().getTime();
                    vm.displayTime.setTime(currentTime - startTime);
                }
            }
        }])
    ;
})();
