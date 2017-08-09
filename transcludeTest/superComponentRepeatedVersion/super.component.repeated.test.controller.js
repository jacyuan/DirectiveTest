/**
 * Created by yuan on 2017/8/9.
 */
(function (angular, undefined) {
    'use strict';

    angular
        .module('superComponentRepeatedModule')
        .controller('superComponentRepeatedTestController', superComponentRepeatedTestController);

    superComponentRepeatedTestController.$inject = ['$scope'];

    /* @ngInject */
    function superComponentRepeatedTestController($scope) {

        var vm = this;

        // public methods

        //event
        var onDestroy = $scope.$on('$destroy', dispose);

        init();

        //region Constructeur
        function init() {
            vm.numbers = [1, 2, 3, 4, 5];
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