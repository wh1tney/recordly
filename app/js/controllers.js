'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('HomeController', ['$scope', function($scope) {
    $scope.allMusic = [];
    $scope.metadata = {song: '', artist: '', album: ''}; 
  }])
  .controller('AlbumsController', ['$scope', function($scope) {
    $scope.albums = [];
    // Get last property of each metadata object and add to array
  }])
  .controller('ArtistsController', ['$scope', function($scope) {
    $scope.artists = [];
    // Get second property of each metadata object and add to array
  }])
  .controller('SongsController', ['$scope', function($scope) {
    $scope.songs = [];
    // Get first property of each metadata object and add to array
  }])
  .controller('FavoritesController', ['$scope', function($scope) {
    $scope.favorites = [];
  }]);
