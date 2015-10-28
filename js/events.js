$(document).ready(function() {
  $.each(calEvent, function(key, value){
    $('#events').append("<div>" + key + "<div class='right'>" + value.date + "</div></div><hr>");
  });
});
