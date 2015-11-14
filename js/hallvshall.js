$(document).ready(function(){
  var max = 0;
  $.each(HvsH, function(k, v) {
    if(v > max)
      max = v;
  })
  $('#HvsH').append('<h5>Hall vs Hall</h5>');
  $.each(HvsH, function(k, v) {
    $('#HvsH').append('<div class="progress radius">'+ k + '<span class"meter" style="width:'+ (v / max) * 100 + '%;"></span></div><br>');
  })
})
