$(document).ready(function() {
  $.ajax('https://aswwu.com/python_server//profile/1516/' + stud.username, { 'dataType':'json','type':'get','complete':function(responce) {
    var data = responce.responseJSON;
    $('#stud').html('<h4>Stud of the Week</h4><img src="https://aswwu.com/media/img-sm/' + data.photo + '"/><br><h5><b>' + data.full_name + '</b></h5>')
    var keys = Object.keys(data);
    console.log(keys);
    var ranKey;
    var disabledInfo = ['username','wwuid','views','photo','quote_author','full_name','attached_to','gender','office_hours','department','email'];
    restart:
    while(true) {
      ranKey = Math.floor(Math.random() * keys.length);
      console.log(keys[ranKey]);
      if(data[keys[ranKey]] == null || data[keys[ranKey]] == '')
        continue;
      for(var i = 0; i < disabledInfo.length; i++){
        if(keys[ranKey] == disabledInfo[i])
          continue restart;
      }
      break;
    }
    $('#stud').append('Random Fact<br><b>' + keys[ranKey].replace(/_/g, " ") + '</b>: ' + data[keys[ranKey]]);
  }})
})
