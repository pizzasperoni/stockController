'use strict';

/**
 * @ngdoc function
 * @name stockControllerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockControllerApp
 */
angular.module('stockControllerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
