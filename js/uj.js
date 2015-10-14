var uj = {
  "1st Volume": {
    link: "UJ1.pdf"
  },
  '2nd Volume': {
    link: "UJ2.pdf"
  }
}
$(document).ready(function() {
  $.each(uj, function(key, value){
    console.log("running UJ's");
    $('#ujs').append("<a href='" + value.link + "'><div>" + key + "</div></a><hr>");
  });
});
