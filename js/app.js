(function (angular) {
	//严格模式
	'use strict';
	angular
	// 引入依赖项
	.module('todoApp',['ngRoute','todoApp.controller','todoApp.service'])
    .config(['$routeProvider',function($routeProvider){
       $routeProvider
	   .when('/:status?',{
		   //路径相对于引用 js 的页面 index.html
		   templateUrl:'./view/todo.html',
		   controller:'TodoController'
	   })
	}])
})(angular);
