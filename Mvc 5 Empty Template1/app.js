var app = angular.module("hts_hackathon_hc", []);






app.controller('onOffController', function($scope) {

$scope.acStatus="checked";
$scope.lightStatus="checked";
$scope.shutDownStatus="checked";

$scope.lightOnStatus="positive";
$scope.acOnStatus="negative";



$scope.shutDownClicked = function() {
		$scope.lightOnStatus="negative";
		$scope.acOnStatus="negative"
   if($scope.acStatus=="checked"){
   	$scope.acStatus="checked";
	$scope.lightOnStatus="positive";
	$scope.acOnStatus="positive";
   }
        
   };
$scope.lightClicked = function() {
	$scope.lightOnStatus="negative";
 if($scope.lightStatus=="checked"){
   	$scope.lightStatus="checked";
   	$scope.lightOnStatus="positive";
   }
        
 };
 $scope.acClicked = function() {
 		$scope.acOnStatus="negative";
 if($scope.shutDownStatus=="checked"){
   	$scope.shutDownStatus="checked";
   		$scope.acOnStatus="positive";
   }
        
    };
});

