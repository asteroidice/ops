var officer = {
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
    imageUrl: "//lorempixel.com/400/600/cats"
  }
};
$(document).ready(function() {
  $.each(officer, function(key, value){
    $('#officers').append("<div class='small-12 medium-6 large-4 columns'><img src='"+ value.imageUrl + "'/><b>" + key + "</b><br>" + value.position + "</div>");
  })
})
