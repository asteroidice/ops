var uj = {
  "1st Edition": {
    link: "UJ1.pdf"
  },
  '2nd Edition': {
    link: "UJ2.pdf"
  }
}
$(document).ready(function() {
  $.each(uj, function(key, value){
    console.log("running UJ's");
    $('#ujs').append("<a href='" + value.link + "'><div>" + key + "</div></a><hr>");
  });
});
