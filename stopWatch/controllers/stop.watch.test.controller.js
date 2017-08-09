/**
 * Created by yuan on 2017/8/3.
 */
(function (angular, undefined) {
    'use strict';

    angular
        .module('myApp')
        .controller('stopWatchTestController', stopWatchTestController);
    stopWatchTestController.$inject = ['$scope'];

    /* @ngInject */
    function mainController($scope) {

        var vm = this;

        // public methods

        //event
        var onDestroy = $scope.$on('$destroy', dispose);

        init();

        //region Constructeur
        function init() {
            vm.interval = 1000;
        }

        //endregion

        //region public methodsx

        //endregion public methods

        //region private methods

        //endregion private methods

        //region events
        function dispose() {
            if (onDestroy !== undefined) {
                onDestroy();
            }
        }

        //endregion events
    }
})(angular);