//Possible future implementation to animate bars needs more work.
//Call looks like this animateBars(k, (v / max) * 100)
function animateBars(id, value) {
  $('#' + id).animate({width:value + '%'}, 30*value);
};

$(document).ready(function(){
  var max = 0;
  $.each(HvsH, function(k, v) {
    if(v > max)
      max = v;
  })
  $('#HvsH').append('<h5>Hall vs Hall</h5>');
  $.each(HvsH, function(k, v) {
    $('#HvsH').append( k + '<div class="progress" role="progressbar"><div id="' + k + '" class="progress-meter text-center" style="width:0%; color:white;font-size:.7em;">' + v + '</div></div>');
    animateBars(k, (v / max) * 100)
  });
});
