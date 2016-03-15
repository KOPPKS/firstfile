app.controller('weatherCtrl', ['$scope', 'weatherService', function($scope, weatherService) {
      function fetchWeather(zip) {
        weatherService.getWeather(zip).then(function(data){
          $scope.place = data;
        }); 
      }
      
      fetchWeather('84043');
      
      $scope.findWeather = function(zip) {
        $scope.place = '';
        fetchWeather(zip);
      };
    }]);