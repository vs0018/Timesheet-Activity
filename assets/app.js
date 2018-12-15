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

        var add = "<tr><td id='name'></td><td id='role'><td id='date'></td></td><td id='months-worked'></td><td id='month-rate'></td><td id='tot-billed'></td><td></td></tr>";
            
        $("table tbody").append(add);

        database.ref().on("child_added", function(snapshot){
            var sv = snapshot.val();

            console.log(sv.name);
            console.log(sv.role);
            console.log(sv.start);
            console.log(sv.billed);

            $("#name").filter(":last").text(sv.name);
            $("#role").filter(":last").text(sv.role);
            $("#date").filter(":last").text(sv.start);
            // $("#months-worked").text(sv.);
            // $("#month-rate").text(sv.);
            $("#tot-billed").filter(":last").text(sv.billed);
        });


    });



});