'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/home.html', 
    controller: 'HomeController'});
  $routeProvider.when('/albums', {
    templateUrl: 'partials/albums.html', 
    controller: 'AlbumsController'});
  $routeProvider.when('/artists', {
    templateUrl: 'partials/artists.html', 
    controller: 'ArtistsController'});
  $routeProvider.when('/songs', {
    templateUrl: 'partials/songs.html', 
    controller: 'SongsController'});
  $routeProvider.when('/favorites', {
    templateUrl: 'partials/favorites.html', 
    controller: 'FavoritesController'});
 $routeProvider.otherwise({redirectTo: '/'});
}]);
