var weatherApp = angular.module('weatherApp', ['ngMaterial', 'ngMessages', 'angularMoment']);
weatherApp.controller('weatherAppCtrl', ['$scope', '$http', 'moment', function ($scope, $http, moment) {


  $scope.weatherDetails = {};
  $scope.showWeather = function (city) {
    $http.post('/getweather', {
      'city': city
    }).success(function (data) {

      if (data.error) {
        $scope.logInErrorMsg = data.error;
      }
      if (!data.error) {
        $scope.weatherDetails = data;
        console.log("weather details ", data);
      }
    });

  }


}]);