$(document).ready(function() {
  $.each(uj, function(key, value){
    console.log("running UJ's");
    $('#ujs').append("<a href='" + value.link + "' target='_blank'><div>" + key + "</div></a><hr>");
  });
});
