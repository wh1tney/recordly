'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('HomeController', ['$scope', function($scope) {
  }])
  .controller('AlbumsController', ['$scope', function($scope) {
    $scope.albums = [];
  }])
  .controller('ArtistsController', ['$scope', function($scope) {
    $scope.artists = [];
  }])
  .controller('SongsController', ['$scope', function($scope) {
    $scope.songs = [];
  }])
  .controller('FavoritesController', ['$scope', function($scope) {
    $scope.favorites = [];
  }]);
