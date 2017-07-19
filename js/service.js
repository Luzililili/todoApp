(function(angular){
   'use strict';
    angular
    .module('todoApp',[])
    .service('TodoSrv',['$window',function($window){
        //--------------00- 存储数据---------------
        //先从localStorage中获取数据
        var localStorage = $window.localStorage;
        var todoList = JOSN.parse(localStorage.getItem('todo'));
        //存储数据
        this.save = function(){
            localStorage.setItem('todo',JOSN.stringify(todoList));
        };

        //--------------01- 添加数据----------------
         
       


    }])
})(angular);