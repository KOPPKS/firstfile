var app = angular.module('rtfmApp', ['firebase'], ['ui-router']);
.constant('fb', {
  url: 'https://realtime556.firebaseio.com/'
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/threads");
  $stateProvider
    .state('threads', {
    	url: "/threads",
    	templateUrl: "threads.html",
      controller: 'threadsCtrl',
      views: {
        '': { templateUrl: 'threads.html'}
      }
    })
    .state('threads2', {
    	url: "/threads/:threadid",
    	templateUrl: "partials/threads/:threadid"
    })
})