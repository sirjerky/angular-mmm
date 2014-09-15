"use strict";

module.exports = function(app) {
  app.directive('statsDirective', function(){
    var direc = {
      restrict: 'EAC',
      templateUrl: 'views/stats-template.html'
    };

    return direc;
  });
};
