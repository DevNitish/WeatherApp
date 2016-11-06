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
    console.log("yth comp ",this.weather.list);
       $scope.tempDate=[];
   $scope.dates=[];
   $scope.tempShowDate=[];
   $scope.showDate=[];
    $scope.mm=new moment();

    for (var i = 0; i <5; i++) {
      $scope.tempShowDate.push(new moment().add(i,'d').format('Y-M-DD'));
     $scope.showDate.push(new moment().add(i,'d').format('ddd, Do MMM'));

    };
    $scope.maxTemp=0;
    $scope.minTemp=0;
    $scope.weather=[];
    $scope.showWeather=function(selectedDate){
      $scope.weather=[];
        ctrl.weather.list.filter(function(obj){
           console.log("obj", obj.dt_txt.substring(0,10));
           console.log("selectedDate",selectedDate);

          if(selectedDate==obj.dt_txt.substring(0,10))
            $scope.weather.push(obj);
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
          
  console.log("dsad",$scope.showDate);
      

	 // this.showConfirm=function(ev,obj)
  //   {
  //        // Appending dialog to document.body to cover sidenav in docs app
  //   var confirm = $mdDialog.confirm()
  //         .title('Would you like to delete this news?')
  //         .textContent('Once it is delete, it cannot be retrieved back!')
  //         .ariaLabel('Lucky day')
  //         .targetEvent(ev)
  //         .ok('Delete it!')
  //         .cancel('Cancel');

  //   $mdDialog.show(confirm).then(function() {
  //     $scope.status = 'You decided to delete obj';
  //     ctrl.removeNews({obj});
  //     ctrl.news=null;
  //   }, function() {
  //   	console.log("keep obj: ",obj);

  //     $scope.status = 'You decided to keep obj';
  //   });
      
  //   console.log("the great THIS userType: ",this.newsid);

  //       //ctrl.addMember(obj)
  //   }//

  //   $scope.editNewsComp=function(newsid,obj){
  //     var newObj={ };
  //     obj.newsid=newsid;
  //      newObj["obj"]=obj;
  //     newObj["newsid"]=newsid;
     
  //     console.log("edit obj newsid: ",newObj);
  //     ctrl.editNews({obj1:newObj});
  //   }
}