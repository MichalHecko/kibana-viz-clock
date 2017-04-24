define(function (require) {

  // Create an Angular module for this plugin
  var module = require('ui/modules').get('kibana-viz-clock');

  // Add a controller to this module
  module.controller('ClockController', function ($scope, $timeout) {

    var setTime = function () {
      $scope.time = Date.now();
      $timeout(setTime, 1000);
    };
    setTime();
  });

});
