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

        $('#myform').each(function(){
            this.reset();
        });

        database.ref().on("child_added", function(snapshot){
            var sv = snapshot.val();

            console.log(sv.name);
            console.log(sv.role);
            console.log(sv.start);
            console.log(sv.billed);

            $("#name").text(sv.name);
            $("#role").text(sv.role);
            $("#date").text(sv.start);
            // $("#months-worked").text(sv.);
            // $("#month-rate").text(sv.);
            $("#tot-billed").text(sv.billed);
        });
    });



});