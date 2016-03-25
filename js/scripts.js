$(document).ready(function() {

  var vacationHtml;

  $("form#vacation").submit(function(event) {
		event.preventDefault();



    var quest1score = parseInt($("input:radio[name=quest1]:checked").val());
    var quest2score = parseInt($("input:radio[name=quest2]:checked").val());
    var quest3score = parseInt($("input:radio[name=quest3]:checked").val());
    var quest4score = parseInt($("input:radio[name=quest4]:checked").val());
    var quest5score = parseInt($("input:radio[name=quest5]:checked").val());
    var quest6score = parseInt($("input:radio[name=quest1]:checked").val());
    var quest7score = parseInt($("input:radio[name=quest2]:checked").val());
    var quest8score = parseInt($("input:radio[name=quest3]:checked").val());
    var quest9score = parseInt($("input:radio[name=quest4]:checked").val());
    var quest10score = parseInt($("input:radio[name=quest5]:checked").val());

    var nameInput1 = $("input#name").val();
    $(".name").text(nameInput1);



    var score = quest1score + quest2score + quest3score + quest4score + quest5score + quest6score + quest7score + quest8score + quest9score + quest10score;

    if (score <= 14) {
      vacationHtml = $("#location1").clone();

    } else if (score <= 18) {
      vacationHtml = $("#location2").clone();

    } else if (score <= 22) {
      vacationHtml = $("#location3").clone();

    } else if (score <= 26) {
      vacationHtml = $(nameInput + "#location4").clone();

    } else if (score <= 31) {
      vacationHtml = $("#location5").clone();

    } else if (score <= 36) {
      vacationHtml = $("#location6").clone();

    } else {
      vacationHtml = $("#location7").clone();

    }
    var modal = $("#myModal")
    modal.find('.modal-body').html(vacationHtml);
    modal.modal("show");
  });

  $("#myModal").on("hidden.bs.modal", function()  {
    window.location.reload()
  });

});
