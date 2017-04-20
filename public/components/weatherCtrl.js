weatherApp.component('myweather',{

	bindings:{

			weather:'<'
		},
		controller:myWeatherCtrl,
		templateUrl:'components/weatherView.html'

});

function myWeatherCtrl($scope, $mdDialog,moment) {

	 $scope.status = 'hola';
    var ctrl=this;
    console.log("here====> ",this.weather);
       $scope.tempDate=[];
   $scope.dates=[];
   $scope.tempShowDate=[];
   $scope.showDate=[];
    $scope.mm=new moment();

    for (var i = 0; i <5; i++) {
      $scope.tempShowDate.push(new moment().add(i,'d').format('Y-MM-DD'));
     $scope.showDate.push(new moment().add(i,'d').format('ddd, DD MM'));

    };
    $scope.maxTemp=0;
    $scope.minTemp=0;
    $scope.weather=[];
    $scope.showWeather=function(selectedDate){
      $scope.weather=[];
      console.log("selected date: ",selectedDate);
        ctrl.weather.list.filter(function(obj){
                console.log("API date: ",obj.dt_txt.substring(0,10));

          // console.log("obj", obj.dt_txt.substring(0,10));
           //console.log("selectedDate",selectedDate);
           console.log("hello ===>",selectedDate);
      
          if(selectedDate==obj.dt_txt.substring(0,10))
            {
              console.log("hello 2===>",obj);
              $scope.weather.push(obj);
            
            }
        })
      console.log(" $scope.weather", $scope.weather);
    }

        // var j=0;
        //   ctrl.weather.list.filter(function(obj){
        //     if($scope.tempDate[j-1]===obj.dt_txt.substring(0,10)){

        //   }else{
        //     if($scope.tempShowDate.length<5){
        //         $scope.tempDate.push(obj.dt_txt.substring(0,10));
        //         $scope.tempShowDate.push(moment(obj.dt_txt.substring(0,10)).format('ddd, Do MMM'));
        //         j++;
        //       }
        //   }
   
        //   $scope.dates=$scope.tempDate.reverse();
        //   $scope.showDate=$scope.tempShowDate.reverse();
        //       console.log("the 6",$scope.mm);  
        //   })
          
  
      

}