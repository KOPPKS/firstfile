app.service('githubService', function($http, $q) {
	var id = "myCLientID";
  	var sec = "mySecretKeyThing";
  	var param = "?client_id=" + id + "&client_secret=" + sec;
  	this.getUser = function() {
  		var deferred = $q.defer();
  	  return $http($
  	  	method: 'GET',
  	  	URL: 'https://api.github.com/users/' + username
  	})
  	 	.then(function(response) {
  	 		deferred.resolve(response);
  	 	})
  		return deferred.promise;
});