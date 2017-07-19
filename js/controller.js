(function (angular) {
    'use strict';
    angular
        .module('todoApp.controller', [])
        .controller('TodoController', ['$scope', 'TodoSrv' ,TodoController])
        function TodoController($scope,TodoSrv) {
            var vm = $scope;
            //-------------01- 数据展示-----------------
            var todoList = TodoSrv.getData();
            vm.todoList = todoList;
            
        }
})(angular);