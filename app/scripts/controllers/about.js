'use strict';

/**
 * @ngdoc function
 * @name stockControllerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stockControllerApp
 */
angular.module('stockControllerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
