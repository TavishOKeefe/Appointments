$(document).ready(function() {

  $("form#apptForm").submit(function(event) {
    event.preventDefault();

      // FRONT END
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var purpose = $("#reason").val();
    var apptDay = $("#date").val();
    var startTime = $("#start").val();
    var endTime = $("#end").val();

    console.log(firstName);
    console.log(lastName);
    console.log(purpose);
    console.log(apptDay);
    console.log(startTime);
    console.log(endTime);

    // BACKEND
    $("#success").text("Your appointment is set! Here are the details:");
    $("#name").text(firstName + " " + lastName);
    $("#purpose").text(purpose);
    $("#dateTime").text(apptDay + " " + startTime + " " + endTime);

    // $("#name").text(firstName + lastName);
    // $("#purpose").text(purpose);
    // $("#dateTime").text(apptDay + startTime + endTime);

  });






});
