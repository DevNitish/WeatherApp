weatherApp.component('myweather',{

	bindings:{

			weather:'<'
		},
		controller:myWeatherCtrl,
		templateUrl:'components/weatherView.html'

});

function myWeatherCtrl($scope, $mdDialog) {
	 $scope.status = 'hola';
    var ctrl=this;
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