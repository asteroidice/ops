$(document).ready(function() {
  console.log(calEvent);
  //Account for repeaded events
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
    calEvent[key].date = date.toLocaleString()
  });
  console.log(calEvent);
  //Hopefully sort the dates.
  calEvent = calEvent.sort(function(a, b) {
    var a = new Date(a.date);
    var b = new Date(b.date);

    if (a < b) return -1;
    else if (b < a) return 1;
    else return 0;
  });
  console.log(calEvent);
  //Output dates
  $.each(calEvent,function(key,value){

    var weekFromNow = new Date();
    weekFromNow = weekFromNow.setDate(weekFromNow.getDate()+7);
    var date = new Date(value.date);
    var dateString = date.toLocaleDateString(navigator.language,{'month':'short',"day":'numeric'}) + " " + date.toLocaleTimeString('en-US',{'hour12': true, 'hour':'2-digit','minute':'2-digit'})
    if(date < weekFromNow){
      dateString = date.toLocaleDateString(navigator.language,{'weekday':'long'}) + " " + date.toLocaleTimeString('en-US',{'hour12': true, 'hour':'2-digit','minute':'2-digit'})
    }
    $('#events').append("<div>" + value.name + "<div class='float-right'>" + dateString + "</div></div><hr>");
  });
});
