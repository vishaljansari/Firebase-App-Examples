// Initialize Firebase
// Initialize Firebase
const config = {
    apiKey: "AIzaSyAcXwD8NgctKNiMrTCq4N8W-W3jNEojFkw",
    authDomain: "cs4220-examples-46ae7.firebaseapp.com",
    databaseURL: "https://cs4220-examples-46ae7.firebaseio.com",
    projectId: "cs4220-examples-46ae7",
    storageBucket: "cs4220-examples-46ae7.appspot.com",
    messagingSenderId: "831347626097"
};
firebase.initializeApp(config);


// Initialize our Angular Application
angular.module('notesApp', ['firebase'])
    .controller('NotesController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

        let ref = firebase.database().ref().child('notes')

        $scope.notes = $firebaseArray(ref)

        $scope.currentNote = {}

        $scope.newNote = function() {
            $scope.notes.$add({ title: 'Untitled', body: '' })
        }
        $scope.setCurrentNote = function(note) {
            $scope.currentNote = note
        }
        $scope.saveNote = function() {
            $scope.notes.$save($scope.currentNote)
        }

    }])