function objLength(obj){
  var i=0;
  for (var x in obj){
    if(obj.hasOwnProperty(x)){
      i++;
    }
  }
  return i;
}
$(document).ready(function() {
  /*var jqxhr = $.getJSON( "http://localhost/ops/api/data.json", function() {
  console.log( "success" );
})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function(responce) {
    console.log( "error", responce);
  })*/
  var dom = "";
  var num = objLength(officerTeam);
  $.each(officerTeam, function(k,v){
    dom += "<div class='row'><h3>"+k+"</h3>";
    $.each(v, function(key, value){
      dom += "<div class='left small-12 medium-6 large-4 columns'><a href='https://aswwu.com/#/search/" + key + "' target='_blank'><img src='"+ value.imageUrl + "'/></a><b>" + key + "</b><br>" + value.position + "</div>";
    });
    dom +="</div>";
    if(num > 1) dom += "<hr>";
    num--;
  });
  $("#officers").html(dom);

});
