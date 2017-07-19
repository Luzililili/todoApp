(function(angular){
   'use strict';
    angular
    .module('todoApp.service',[])
    .service('TodoSrv',['$window',function($window){
        //--------------00- 存储数据---------------
        //先从localStorage中获取数据
        var localStorage = $window.localStorage;
        var todoList = JSON.parse(localStorage.getItem('todo'));
        //存储数据
        this.save = function(){
            localStorage.setItem('todo', JSON.stringify(todoList));
        };
        
        //因为有this的指向问题,所以声明一个变量
        var that = this;
        //--------------01- 数据展示----------------
        this.getData = function(){
            return todoList;
        }
       


    }])
})(angular);