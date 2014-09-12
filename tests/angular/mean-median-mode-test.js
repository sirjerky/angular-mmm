"use strict";

require('../../app/js/app.js');
require('angular-mocks');

describe('calcApp', function(){
  var $controllerConstructor;
  var scope;

  beforeEach(angular.mock.module('calcApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should be able to create a new controller', function(){
    var calcCtrl = $controllerConstructor('calcController', {$scope: scope});
    expect(typeof calcCtrl).toBe('object');
  });

  describe('statistic results', function(){
    var ctrl;

    it('should return a mean', function(){
      ctrl = $controllerConstructor('calcController', {$scope: scope});
      var data = [1,2,3];
      scope.getMean(data);
      expect(scope.results.mean).toBe(2);
    });

    it('should return a median', function(){
      ctrl = $controllerConstructor('calcController', {$scope: scope});
      var data = [1,2,3];
      scope.getMedian(data);
      expect(scope.results.median).toBe(2);
    });

    it('should return a mode', function(){
      ctrl = $controllerConstructor('calcController', {$scope: scope});
      var data = [1,2,2,3];
      scope.getMode(data);
      expect(scope.results.mode).toEqual(jasmine.any(Array));
      expect(scope.results.mode).toEqual([2]);
    });
  });
});
