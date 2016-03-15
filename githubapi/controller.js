app.controller('GitHubController', function($scope, githubService) {
	githubService.getUser().then.function(res) {
		$scope.user = res.data;
	});
	
	$scope.getUser();

});


