$(document).ready(function() {
  $.each(calEvent, function(key, value){
    $('#events').append("<div>" + key + "<div class='float-right'>" + value.date + "</div></div><hr>");
  });
});
