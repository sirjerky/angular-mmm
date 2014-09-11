"use strict";

module.exports = function(app){
  app.controller('calcController', function($scope){
    $scope.results = {
      input: [],
      mean: 0,
      median: 0,
      mode: []
    };

    $scope.getMean = function(data){
      var sum = 0;
      for(var i = 0; i < data.length; i++) sum += Number(data[i]);
      $scope.results.mean = sum / data.length;
    };

    $scope.getMode = function(data){
      var results=[];

      for(var i = 0; i < data.length; i++){
        var el = Number(data[i]);
        if(results[el]){
        
          results[el]+=1;
        }else{
          results[el]=1;
        }
      }
      var modes=[];
      var maxCount = 0;
      for(i = 0; i < results.length; i++){
        if(results[i] > maxCount){
          modes=[];
          modes.push(i);
          maxCount = results[i];
        }else if(results[i] === maxCount){
          modes.push(i);
        }
      }
      $scope.results.mode = modes;
    };

    $scope.getMedian = function(data){
      var numbers = data;
      var i;
      // first we sort the array
      numbers.sort(function compareNumbers(a,b){
        return a - b;
      });
      console.log(numbers);
      // next check for even or odd
      if(numbers.length % 2 === 0){
        i = numbers.length / 2;
        $scope.results.median = (Number(numbers[i]) + Number(numbers[i-1])) / 2;
      } else {
        i = (numbers.length - 1) / 2;
        $scope.results.median = Number(numbers[i]);
      }  
    };

    $scope.getResults = function() {
      var data = $scope.results.input.split(',');
      $scope.getMean(data);
      $scope.getMedian(data);
      $scope.getMode(data);
    };
  });
};
