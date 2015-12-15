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
  .controller('AuthController', ['$scope', '$firebaseAuth', '$rootScope',
function($scope, $firebaseAuth, $rootScope) {

    // Callback for checking authentication state
    function authDataCallback(authData) {
      if (authData) {
        // save logged in user on rootScope
        $rootScope.user = authData.uid;
      } else {
        console.log("User is logged out");
        $rootScope.user = null;
      }
    }

    var auth = new Firebase('https://recordly.firebaseio.com/');
    auth.onAuth(authDataCallback);

    $scope.user = {email:'', password:''};

    // Callback function for user registration
    function registrationHandler(error, data) {
      if (error) {
        console.log("Registration failed!");
      } else {
        auth.authWithPassword($scope.user, loginHandler);
      }
    }

    // Callback function for user login
    function loginHandler(error, data) {
      if (error) {
        console.log("Login failed!\n%s" % error);
      } else {
        console.log(data);
      }
    }

    $scope.register = function() {
      auth.createUser($scope.user, registrationHandler)
    }

    $scope.login = function() {
      auth.authWithPassword($scope.user, loginHandler);
    }
  }]);
