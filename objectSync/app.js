

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

  angular.module('fbApp', ['firebase'])
    .controller('SyncController', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {

        let ref = firebase.database().ref().child("syncDemoData")

        $scope.data = $firebaseObject(ref)



        // download the data into a local object
        let syncObject = $firebaseObject(ref);

        // synchronize the object with a three-way data binding
        syncObject.$bindTo($scope, "threeWayData")

    }])