



$( document ).ready(function() {



		document.getElementById('wrapper').style.height =  $(window).height() + "px";
		document.getElementById('topArt').style.marginTop =  $(window).height()*30/100 + "px";
		document.getElementById('loginBtn').style.marginTop =  $(window).height()*15/100 + "px";




	window.onresize = function(event){

		document.getElementById('wrapper').style.height =  $(window).height() + "px";
		document.getElementById('topArt').style.marginTop =  $(window).height()*30/100 + "px";
		document.getElementById('loginBtn').style.marginTop =  $(window).height()*15/100 + "px";

	}

});



/*

var myApp = angular.module('jsonData',[]);



var myEmp ={};




myApp.run(function($http){



	$http.get("https://my-new-hw1.herokuapp.com/getAllEmp").success(function(data){

		myEmp.items = data;

	});




});






myApp.controller('jsonDataController', function ($scope, $http) {

	
	$scope.emp = myEmp;



	$scope.getAllEmp = function(){

		return $scope.emp = myEmp;
	
	};



});


$( document ).ready(function() {





});

*/