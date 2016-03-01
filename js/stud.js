$(document).ready(function() {
  $.ajax('https://aswwu.com/python_server//profile/1516/' + stud.username, { 'dataType':'json','type':'get','success':function(data) {

    //check if user exists
    if('error' in data){
      $('#stud').html('<b style="color:red;">I couldn\'t get any studly information to you.</b>');
      return;
    }

    //check if they have a profile pic
    if(data.photo)
      var photo = "https://aswwu.com/media/img-sm/" + data.photo;
    else
      var photo = "https://aswwu.com/media/img-sm/images/mask_unknown.png";
    $('#stud').html('<h4>Stud of the Week</h4><img src="' + photo + '"/><br><h5><b>' + data.full_name + '</b></h5>')

    var keys = Object.keys(data);
    var ranKey;
    var disabledInfo = ['username','wwuid','views','photo','quote_author','full_name','attached_to','gender','office_hours','department','email','privacy'];

    var notEmpty = function(){
      return keys.reduce(function(p,c,i,a){
        var thing = (p||(data[c]&&!($.inArray(c,disabledInfo)>=0)));
        return thing;
      }, false);
    };
    //check if there is at least one value that is not null and is not in
    if(!notEmpty())
      return;

    restart:
    while(true) {
      ranKey = Math.floor(Math.random() * keys.length);
      if(data[keys[ranKey]] == null || data[keys[ranKey]] == '')
        continue;
      for(var i = 0; i < disabledInfo.length; i++){
        if(keys[ranKey] == disabledInfo[i])
          continue restart;
      }
      break;
    }
    $('#stud').append('Random Fact<br><b>' + keys[ranKey].replace(/_/g, " ") + '</b>: ' + data[keys[ranKey]]);
  },'error':function(responce) {
    console.error(responce);
    $('#stud').html('<b style="color:red;">I couldn\'t get any studly information to you.</b>')
  }})
})
