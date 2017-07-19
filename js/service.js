(function (angular) {
    'use strict';
    angular
        .module('todoApp.service', [])
        .service('TodoSrv', ['$window', function ($window) {
            //--------------00- 存储数据---------------
            //先从localStorage中获取数据
            var localStorage = $window.localStorage;
            var todoList = JSON.parse(localStorage.getItem('todo'));
            //存储数据
            this.save = function () {
                localStorage.setItem('todo', JSON.stringify(todoList));
            };

            //因为有this的指向问题,所以声明一个变量
            var that = this;
            //--------------01- 数据展示----------------
            this.getData = function () {
                return todoList;
            }

            //--------------02- 添加数据-----------------
            this.add = function (taskName) {
                var id = todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1;
                //添加到数组中
                todoList.push({
                    id: id, name: taskName, isCompleted: false
                })
                //添加后存储一下数据
                that.save();
            }

            //--------------03- 删除数据-----------------
            this.del = function (id) {
                for (var i = 0; i < todoList.length; i++) {
                    if (todoList[i].id === id) {
                        todoList.splice(i, 1);
                        break;
                    }
                }
                //删除完后,存储数据
                that.save();
            }

            //--------------05- 切换任务选中状态----------
            this.checkedAll = function (isCheckedAll) {
                for (var i = 0; i < todoList.length; i++) {
                    todoList[i].isCompleted = isCheckedAll;
                }
                // 切换完选中状态后存储数据
                that.save();
            }

            //--------------06- 清除已完成的项目----------
            this.delCompleted = function () {
                //声明一个临时数组,存放未完成的
                var tmpArr = [];
                for (var i = 0; i < todoList.length; i++) {
                    if (!todoList[i].isCompleted) {
                        tmpArr.push(todoList[i]);
                    }
                }
                // 清空原来的数组,不会改变指向
                todoList.length = 0;
                [].push.apply(todoList, tmpArr);

                that.save();
            }

            //--------------06-1 清除按钮的显示与隐藏----------
            this.isShow = function () {
                var ret = false;
                for (var i = 0; i < todoList.length; i++) {
                    if (todoList[i].isCompleted) {
                        ret = true;
                    }
                }
                return ret;
            }

            //--------------07- 显示未完成数--------------
            this.getCount = function () {
                var count = 0;
                for (var i = 0; i < todoList.length; i++) {
                    if (!todoList[i].isCompleted) {
                        count++;
                    }
                }
                return count;
            }
        }])
})(angular);