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
    .controller('AuthController', ['$scope', '$firebaseAuth', function ($scope, $firebaseAuth) {

        let auth = $firebaseAuth()

        // login with Google
        $scope.login = function () {
            auth.$signInWithPopup("google").then(function (firebaseUser) {
                $scope.currentUser = firebaseUser
                console.log("Signed in as:", firebaseUser)
            }).catch(function (error) {
                $scope.error = error
                console.log("Authentication failed:", error)
            })
        }

        // logout
        $scope.logout = function () {
            firebase.auth().signOut().then(function () {
                $scope.currentUser = null
                console.log('Signed Out');
                $scope.$apply()
            }, function (error) {
                $scope.error = error
                console.error('Sign Out Error', error);
            })
        }



    }])