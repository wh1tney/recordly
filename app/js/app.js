'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/home.html', 
    controller: 'HomeController'});
  $routeProvider.when('/records', {
    templateUrl: 'partials/records.html', 
    controller: 'RecordsController'});
 $routeProvider.otherwise({redirectTo: '/'});
}]);
