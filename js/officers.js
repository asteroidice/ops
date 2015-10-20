var officerTeam = {
  "Executive Cabinet": {
    "Johnel Lagabon": {
      position: "President",
      imageUrl: "johnel.jpg"
    },
    "Daniel Wilkinson": {
      position: "Executive VP",
      imageUrl: "daniel.jpg"
    },
    "Kyle Nicolas": {
      position: "Social VP",
      imageUrl: "kyle.jpg"
    },
    "Nathan Zimerly": {
      position: "Marketing VP",
      imageUrl: "nathan.jpg"
    },
    "Nickolas Leach": {
      position: "Religious VP",
      imageUrl: "nick.jpg"
    },
    "Kyler Morgan": {
      position: "Secretary",
      imageUrl: "http://lorempixel.com/400/600/cats"
    },
    "Jordan Dubini": {
      position: "Financial VP",
      imageUrl: "jordan.jpg"
    }
  },
  "Marketing Team": {
    "Nathan Zimerly": {
      position: "Marketing VP",
      imageUrl: "nathan.jpg"
    },
    "Ryan Rabello": {
      position: "Webmaster",
      imageUrl: "ryan.jpg"
    }
  }
};
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
  var dom = "";
  var num = objLength(officerTeam);
  $.each(officerTeam, function(k,v){
    dom += "<div class='row'><h3>"+k+"</h3>";
    $.each(v, function(key, value){
      dom += "<div class='left small-12 medium-6 large-4 columns'><img src='"+ value.imageUrl + "'/><b>" + key + "</b><br>" + value.position + "</div>";
    });
    dom +="</div>";
    if(num > 1) dom += "<hr>";
    num--;
  });
  $("#officers").html(dom);

});
