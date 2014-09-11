"use strict";

require('angular/angular');
require('angular-route');

var calcApp = angular.module('calcApp', ['ngRoute']);

//controllers
require('./controllers/calc-controller')(calcApp);

calcApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/calc-template.html',
      controller: 'calcController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
