// Initialize Firebase
  const config = {
    apiKey: "AIzaSyAcXwD8NgctKNiMrTCq4N8W-W3jNEojFkw",
    authDomain: "cs4220-examples-46ae7.firebaseapp.com",
    databaseURL: "https://cs4220-examples-46ae7.firebaseio.com",
    projectId: "cs4220-examples-46ae7",
    storageBucket: "cs4220-examples-46ae7.appspot.com",
    messagingSenderId: "831347626097"
  };
  firebase.initializeApp(config)

  angular.module('fbApp', ['firebase', 'angularMoment'])
    .controller('SyncController', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {

        let ref = firebase.database().ref().child("guestbook")

        $scope.posts = $firebaseArray(ref)

        $scope.addPost = function(){
            $scope.posts.$add({
                message: $scope.message,
                date: new Date().toUTCString()
            })
            $scope.message = ''
        }

        $scope.removePost = function(post) {
            
            $scope.posts.$remove(post)


        }


    }])