/**
 * Created by yuan on 2017/8/9.
 */
(function (angular, undefined) {
    'use strict';

    angular
        .module('superComponentModule')
        .controller('superComponentTestController', superComponentTestController);
    superComponentTestController.$inject = ['$scope'];

    /* @ngInject */
    function superComponentTestController($scope) {

        var vm = this;

        // public methods

        //event
        var onDestroy = $scope.$on('$destroy', dispose);

        init();

        //region Constructeur
        function init() {
            vm.world = 'world from superComponentTestController';
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