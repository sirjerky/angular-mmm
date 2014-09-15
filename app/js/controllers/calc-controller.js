"use strict";

module.exports = function(app){
  app.controller('calcController', function($scope, getStatistics){
    $scope.results = getStatistics.results;
    $scope.getMean = getStatistics.getMean;
    $scope.getMode = getStatistics.getMode;
    $scope.getMedian = getStatistics.getMedian;

    $scope.getResults = function() {
      var data = $scope.input.split(/\D/);
      data = data.filter(Boolean);
      $scope.getMean(data);
      $scope.getMedian(data);
      $scope.getMode(data);
    };
  });
};
