$(document).ready(function() {
  $.each(calEvent, function(key, value){
    var now = new Date();
    var date = new Date(value.date);
    if(now > date && !('repeat' in value))
      return;
    if('repeat' in value){
      while(date < now){
        date.setDate(date.getDate() + 7*value.repeat);
      }
    }
    var dateString = date.toLocaleDateString(navigator.language,{'month':'short',"day":'numeric'}) + " " + date.toLocaleTimeString('en-US',{'hour12': true, 'hour':'2-digit','minute':'2-digit'})
    now.setDate(now.getDate() + 7);
    if(date < now){
      dateString = date.toLocaleDateString(navigator.language,{'weekday':'long'}) + " " + date.toLocaleTimeString('en-US',{'hour12': true, 'hour':'2-digit','minute':'2-digit'})
    }
    $('#events').append("<div>" + key + "<div class='float-right'>" + dateString + "</div></div><hr>");
  });
});
