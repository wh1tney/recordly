'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('HomeController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
    var recordsRef = new Firebase("https://recordly.firebaseio.com/");

    // Firebase synchronized array
    $scope.allMusic = $firebaseArray(recordsRef);

    // TODO: synchronize these arrays
    $scope.albums = [];
    $scope.artists = [];
    $scope.songs = [];

    $scope.metadata = {song: '', artist: '', album: ''}; 

    $scope.saveMusic = function() {
      $scope.allMusic.$add($scope.metadata);
      $scope.albums.push({title: $scope.metadata.album, favorite: false});
      $scope.artists.push({name: $scope.metadata.artist, favorite: false});
      $scope.songs.push({title: $scope.metadata.song, favorite: false});

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
  .controller('AuthController', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth) {
    var authRef = new Firebase('https://recordly.firebaseio.com/');
    var auth = $firebaseAuth(authRef);

    $scope.user = {email:'', password:''};

    $scope.register = function() {
      auth.$createUser($scope.user).then(function(data) {
        auth.$login('password', $scope.user);
      });
    };
  }]);
