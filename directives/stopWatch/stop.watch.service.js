/**
 * Created by yuan on 2017/8/3.
 */
(function () {
    'use strict';
    angular.module('stopWatch')
        .factory('StopWatchService', ['$interval', function ($interval) {
            var startTime, interval;
            var started = false;
            var displayTime, refreshInterval;

            return function (inputDisplayTime, inputInterval, inputStarted) {
                refreshInterval = inputInterval || 1000;
                displayTime = inputDisplayTime || new Date(0);
                started = inputStarted || false;

                return {
                    restart: restart,
                    startTimer: startTimer,
                    stopTimer: stopTimer
                }
            };

            function restart(newInterval) {
                stopTimer();
                refreshInterval = newInterval;
                startTimer();
            }

            function startTimer() {
                if (started === false) {
                    console.log('startTimer');

                    startTime = new Date().getTime();

                    interval = $interval(updateDisplayTime, refreshInterval);

                    started = true;
                }
            }

            function stopTimer() {
                if (started) {
                    console.log('stopTimer');
                    displayTime.setTime(0);
                    $interval.cancel(interval);
                    started = false;
                }
            }

            function updateDisplayTime() {
                console.log('update');
                var currentTime = new Date().getTime();
                var timeElapsed = currentTime - startTime;
                displayTime.setTime(timeElapsed);
            }
        }])
    ;
})();
