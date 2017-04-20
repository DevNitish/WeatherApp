weatherApp.component('myweather', {

  bindings: {

    weather: '<'
  },
  controller: myWeatherCtrl,
  templateUrl: 'components/weatherView.html'

});

function myWeatherCtrl($scope, $mdDialog, moment) {

  $scope.status = 'hola';
  var ctrl = this;
  console.log("here====> ", this.weather);
  $scope.tempDate = [];
  $scope.dates = [];
  $scope.tempShowDate = [];
  $scope.showDate = [];
  $scope.mm = new moment();

  for (var i = 0; i < 5; i++) {
    $scope.tempShowDate.push(new moment().add(i, 'd').format('Y-MM-DD'));
    $scope.showDate.push(new moment().add(i, 'd').format('ddd, DD MM'));

  };
  $scope.maxTemp = 0;
  $scope.minTemp = 0;
  $scope.weather = [];
  $scope.showWeather = function (selectedDate) {
    $scope.weather = [];
    ctrl.weather.list.filter(function (obj) {

      if (selectedDate == obj.dt_txt.substring(0, 10)) {
        $scope.weather.push(obj);
      }
    })
  }


}//Ctrl ends