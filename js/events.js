var calEvent = {
  "Monday": {
    date: "10/12"
  },
  'Some Other Event': {
    date: "Whenever"
  }
}
$(document).ready(function() {
  $.each(calEvent, function(key, value){
    $('#events').append("<div>" + key + "<div class='right'>" + value.date + "</div></div><hr>");
  });
});
