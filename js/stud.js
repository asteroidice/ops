$(document).ready(function() {
  $.ajax('https://aswwu.com/python_server//profile/1516/' + stud.username, { 'dataType':'json','type':'get','complete':function(responce) {
    var data = responce.responseJSON;
    $('#stud').html('<h4>Stud of the Week</h4><img src="https://aswwu.com/media/img-sm/' + data.photo + '"/><br><b>' + data.full_name + '</b>')
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
    $('#stud').append('<br>Random Fact<br><b>' + keys[ranKey].replace(/_/g, " ") + '</b>: ' + data[keys[ranKey]]);


  }})

  //Aswwu image is https://aswwu.com/media/img-sm/profiles/1516/02639-2019687.jpg
})

/*Example aswwu data
{"username": "ryan.rabello", "wwuid": "2019687", "minors": "Dragon slaying, Awesomness,", "office": null, "views": 26, "photo": "profiles/1516/02639-2019687.jpg", "preprofessional": "", "career_goals": "There are times when living under a bridge in California doesn't seem that bad. If that doesn't work out I'd like to be a programmer for Google.", "class_of": "2019", "phone": "", "quote_author": "Unknown", "birthday": "", "full_name": "Ryan Rabello", "hobbies": "Hiking, Robotics, Programming, Web Development, Dating, Women, Dating Women, Woman Dating", "relationship_status": "Will Date For Coffee", "majors": "Computer Engineering,", "favorite_books": "Hitchhiker's Guide to the Galaxy", "favorite_food": "Any kind of food that involves eating.", "attached_to": "Coffee?", "favorite_movies": "Any kind of food that involves eating.", "pet_peeves": "When professors stand in front of the projector, get rainbows on their faces. (Don't ask its a personal problem)", "gender": "Male", "graduate": "I sure hope so. \ud83d\ude2c", "website": "", "office_hours": null, "quote": "I love you with all my butt. I would say heart but my butt is bigger.", "class_standing": "Sophomore", "department": null, "high_school": "Glendale Adventist Academy", "email": "ryan.rabello@gmail.com", "favorite_music": "All kinds, Any sort of music is in essence emotion in the form of vibrations.", "personality": "INFJ - Counselor"}*/
