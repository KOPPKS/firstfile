var app = angular.module('FirstModule', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/addOrder', {
		templateUrl: 'add_order.html',
		controller: 'AddNewOrdersController'
	}).
	when('/showOrders', {
		templateUrl: 'show_orders.html',
		controller: 'ShowOrdersController'
	})
	
	otherwise({
		redirectTo: '/addOrder'
	});

app.controller('AddNewOrdersController', function($scope) {
	$scope.message = "This had better work!";
});

app.controller('ShowOrdersController', function($scope) {
	$scope.message = "This is the Show Orders List";  
});


