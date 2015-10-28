$(document).ready(function() {
  $.each(uj, function(key, value){
    console.log("running UJ's");
    $('#ujs').append("<a href='" + value.link + "'><div>" + key + "</div></a><hr>");
  });
});
