'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);
phonecatApp.controller('PhoneListCtrl', function($scope){
  $scope.title = 'Телефони';
  $scope.phones = [
    {
      'name': 'Nexus S',
      'snippet': 'Fast just got faster with Nexus S.',
      'status': true,
      'priority':1
    }, {
      'name': 'Motorola XOOM with Wi-Fi',
      'snippet': 'The Next, Next Generation tablet.',
      'status': false,
      'priority':2
    }, {
      'name': 'MOTOROLA XOOM',
      'snippet': 'The Next, Next Generation tablet.',
      'status': true,
      'priority':3
    }
  ];

  // Filter
  var date = new Date();

  $scope.today = date;

  $scope.doneAndFilter = function(phoneItem) {
    return phoneItem.name && phoneItem.priority > 1 && phoneItem.status === true;
  }

  //sort

  $scope.sortField = undefined;
  $scope.reverse = false;

  $scope.sort = function(fieldName) {
    if($scope.sortField === fieldName) {
      $scope.reverse = !$scope.reverse;
    } else {
      $scope.sortField = fieldName;
      // $scope.reverse = false;
    }
  };

  $scope.isSprtUp = function(fieldName) {
    return $scope.sortField === fieldName && !$scope.reverse;
  }

  $scope.isSprtDown = function(fieldName) {
    return $scope.sortField === fieldName && $scope.reverse;
  }
});
