(function (angular) {
    'use strict';
    angular
        .module('todoApp.controller', [])
        .controller('TodoController', ['$scope', '$location', 'TodoSrv', TodoController])
    function TodoController($scope, $location, TodoSrv) {
        var vm = $scope;
        //-------------01- 数据展示-----------------
        var todoList = TodoSrv.getData();
        vm.todoList = todoList;

        //-------------02- 添加数据-----------------
        //当页面打开时,数据是空的e
        vm.taskName = '';
        vm.add = function () {
            if (vm.taskName.trim() === '') {
                return;
            }
            TodoSrv.add(vm.taskName);
            //添加完之后,清空
            vm.taskName = '';
        }

        //--------------03- 删除数据-----------------
        vm.del = TodoSrv.del;

        //--------------04- 编辑数据------------------
        vm.editingId = -1;
        vm.edit = function (id) {
            //当前编辑的时候,让editingId = id ,值变为 true,就添加 editing 类
            vm.editingId = id;
        }
        //保存修改的数据
        vm.editSave = function () {
            vm.editingId = -1;
            TodoSrv.save();
        }

        //--------------05- 切换任务选中状态----------
        vm.isCheckedAll = false;
        vm.checkedAll = function () {
            TodoSrv.checkedAll(vm.isCheckedAll);
        }

        //--------------06- 清除已完成的项目----------
        vm.delCompleted = TodoSrv.delCompleted;

        //--------------06-1 清除按钮的显示与隐藏----------
        vm.isShow = TodoSrv.isShow;

        //--------------07- 显示为完成数--------------
        vm.getCount = TodoSrv.getCount;

        //--------------08- 根据URL变化显示相应任务-------------
        vm.location = $location;
        //监视锚点后的哈希值
        vm.$watch('location.url()', function (newValue, oldValue) {
            console.log(newValue);
            //判断一下
            switch (newValue) {
                case '/active':
                    vm.status = false;
                    break;
                case '/completed':
                    vm.status = true;
                    break;
                default:
                    vm.status = undefined;
                    break;
            }
        });
    }
})(angular);