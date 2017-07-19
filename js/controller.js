(function (angular) {
    'use strict';
    angular
        .module('todoApp.controller', [])
        .controller('TodoController', ['$scope', 'TodoSrv' ,TodoController])
        function TodoController($scope,TodoSrv) {
            //-------------01- 数据展示-----------------
        }
})(angular);