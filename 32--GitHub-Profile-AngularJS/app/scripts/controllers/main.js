'use strict';

/**
 * @ngdoc function
 * @name githubProfileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the githubProfileApp
 */
angular.module('githubProfileApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
