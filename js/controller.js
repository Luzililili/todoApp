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
            
            //-------------02- 添加数据-----------------
            //当页面打开时,数据是空的e
            vm.taskName = '';
            vm.add = function(){
                if(vm.taskName.trim() === ''){
                    return;
                }
                TodoSrv.add(vm.taskName);
                //添加完之后,清空
                vm.taskName = '';
            }

            //--------------03- 删除数据-----------------
            vm.del = TodoSrv.del;

            //--------------04- 修改数据------------------
            vm.editingId = -1;
            vm.edit = function(id){
                //当前编辑的时候,让editingId = id ,值变为 true,就添加 editing 类
                vm.editingId = id;
            }
            //保存修改的数据
            vm.editSave = function(){
                 vm.editingId = -1;
                 TodoSrv.save();
            }
        }
})(angular);