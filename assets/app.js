// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCVA_-jmwN87lGZk-uFGxcudTGzQO5zuLg",
    authDomain: "timecard-project.firebaseapp.com",
    databaseURL: "https://timecard-project.firebaseio.com",
    projectId: "timecard-project",
    storageBucket: "",
    messagingSenderId: "711958370286"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  
$(document).ready(function(){

    $("#submit").on("click", function(){
        var name = $("#empName").val().trim();
        var role = $("#empRole").val().trim();
        var start = $("#empStart").val().trim();
        var billed = $("#totBilled").val().trim();

        database.ref().push({
            name: name,
            role: role,
            start: start,
            billed: billed
        });

    });



});