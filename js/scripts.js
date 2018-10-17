$(document).ready(function() {

  $("form#apptForm").submit(function(event) {
    event.preventDefault();

    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var purpose = $("#reason").val();
    var apptDay = $("#date").val();
    var startTime = $("#start").val();
    var endTime = $("#end").val();

    $("#name").text(firstName + " " + lastName);
    $("#purpose").text(purpose);
    $("#dateTime").text(apptDay + " " + startTime + " " + endTime);

    $("#apptForm").addClass("hide");
    $("#welcome").addClass("hide");
    $("#apptbtn").addClass("hide");
    $("#surveybtn").removeClass("hide");
    $("#survey").removeClass("hide");
    $("#booked").removeClass("hide");

  });

});
