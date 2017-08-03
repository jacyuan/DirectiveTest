(function () {
    'use strict';
    angular.module('myApp')
        .run(function ($templateCache) {
            $templateCache.put('stop.watch.template.html',
                '<p ng-bind="displayTime | stopwatchTime"></p>' +
                '<button ng-click="startTimer()">Start</button>' +
                '<button ng-click="stopTimer()">Stop</button>'
            );
        });
})();