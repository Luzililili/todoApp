(function (angular) {
    'use strict';
    angular
        .module('todoApp.controller', [])
        .controller('TodoController', ['$scope', '$location', '$routeParams', 'TodoSrv', TodoController])
    function TodoController($scope, $location, $routeParams, TodoSrv) {
        console.log($routeParams);
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
        // vm.location = $location;
        // //监视锚点后的哈希值
        // vm.$watch('location.url()', function (newValue, oldValue) {
        //     console.log(newValue);
        //     //判断一下
        //     switch (newValue) {
        //         case '/active':
        //             vm.status = false;
        //             break;
        //         case '/completed':
        //             vm.status = true;
        //             break;
        //         default:
        //             vm.status = undefined;
        //             break;
        //     }
        // });

        // 路由的中性过程
        // 1- 用户单机 active 这个 a 连接,改变 URL 中的毛店址
        // 2- 锚点发生改变以后, angular 那个感知到这个变化 (angular会监视锚点值的变化)
        // 3- 此时,路由机制就会根据当前的锚点值,重新匹配路由规则
        // 4- 当某个路由规则匹配以后, angular 会把这个规则对应的视图内容(templateUrl),通过 ajax请求获取并且展示到页面中( ng-view )
        // 5- 这个规则对应的控制器中的代码就会执行

        var status = $routeParams.status;
        switch (status) {
            case 'active':
                vm.status = false;
                break;
            case 'completed':
                vm.status = true;
                break;
            default:
                vm.status = undefined;
                break;
        }
    }
})(angular);