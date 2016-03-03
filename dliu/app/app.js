'use strict';

// Declare app level module which depends on views, and components
var applog=
    angular.module('myApp', [
  'ngRoute',
  'myApp.version'
])
applog.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index', {
      templateUrl : 'index.html',
      controller : 'homeCtrl'
    }).otherwise({redirectTo: '/login'});
}]);

$(document).ready(function() {
  $('#myCarousel').carousel({
    interval:3000,
    pause: hover
  });

  $('#myCarousel').on('slid.bs.carousel', function() {
    //回调方法
  });
});
applog.controller("loginCtrl",function($scope,$location){
  $scope.login=function(){};
});

var app = angular.module("myHome", []);
app.controller("homeCtrl", function($scope) {
  $scope.homefun=function(){$scope.home=1; $scope.live=2; $scope.channel=2;$scope.setting=2;};
  $scope.livefun  = function() {$scope.home=2; $scope.live=1; $scope.channel=2;$scope.setting=2;};
  $scope.channelfun = function() {$scope.home=2; $scope.live=2; $scope.channel=1;$scope.setting=2;};
  $scope.settingfun  = function() {$scope.home=2; $scope.live=2; $scope.channel=2;$scope.setting=1;};
});

