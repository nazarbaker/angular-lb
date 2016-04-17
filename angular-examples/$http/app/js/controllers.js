'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);
phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
  $scope.title = 'Телефони';

  // get request

  $http.get('phones/others/phones.json').success(function(data, status, headers, config) {
    console.log('This is Data: ', data, '\n\n This is Status: ', status, '\n\n This is headers: ', headers, '\n\n This is config: ', config)
    $scope.phones = data;
   });
  // .error(function(){
  //
  // })

  // Filter
  var date = new Date();

  $scope.today = date;

  // $scope.doneAndFilter = function(phoneItem) {
  //   return phoneItem.name && phoneItem.priority > 1 && phoneItem.status === true;
  // }

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
