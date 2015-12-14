'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('HomeController', ['$scope', function($scope) {
    $scope.allMusic = [];
    $scope.albums = [];
    $scope.artists = [];
    $scope.songs = [];

    $scope.metadata = {song: '', artist: '', album: ''}; 

    $scope.saveMusic = function() {
      $scope.allMusic.push($scope.metadata);
      $scope.albums.push($scope.metadata.album);
      $scope.artists.push($scope.metadata.artist);
      $scope.songs.push($scope.metadata.song);

      // Clear out data after it has been saved!
      $scope.metadata = {song: '', artist: '', album: ''}; 
    };
  }])
  .controller('AlbumsController', ['$scope', function($scope) {
  }])
  .controller('ArtistsController', ['$scope', function($scope) {
  }])
  .controller('SongsController', ['$scope', function($scope) {
  }])
  .controller('FavoritesController', ['$scope', function($scope) {
  }]);
