'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);
phonecatApp.controller('PhoneListCtrl', function($scope){
  $scope.title = 'Телефони';
  $scope.phones = [
    {
      'name': 'Nexus S',
      'snippet': 'Fast just got faster with Nexus S.',
      'status': true
    }, {
      'name': 'Motorola XOOM with Wi-Fi',
      'snippet': 'The Next, Next Generation tablet.',
      'status': false
    }, {
      'name': 'MOTOROLA XOOM',
      'snippet': 'The Next, Next Generation tablet.',
      'status': true
    }
  ];

  // Filter
  var date = new Date();

  $scope.today = date;
});
