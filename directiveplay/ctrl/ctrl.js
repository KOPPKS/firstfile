app.controller('mainCtrl', ['$scope', function ($scope) {
	$scope.kevin = { name: 'Kevin', address: '123 Loserville'};
	$scope.dana = { name: 'Dana', address: 'Really?'};

}])
.directive('myCustomer', function() {
	return {
		restrict: 'E',
		scope: {
			CustomerInfo: '=info'
		},
		templateUrl: 'my-customer-iso.html'
	};
});