app.service('threadService', function(fb) {
	this.getThreads = function() {
      return new Firebase(fb.url + '/threads');
	}
	this.getThread = function() {
	  return new Firebase('https://realtime556.firebaseio.com/threads/' + threadId);
	}
})

var firebaseRef = new Firebase('https://realtime556.firebaseio.com/)';

getComments: function (threadId) {
    return new Firebase(fb + '/threads/' + threadId + '/comments');
  }