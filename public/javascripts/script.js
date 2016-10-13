// Front end js goes here
$(document).ready(function () {
  // Your ajax code goes here
  loadCompliment();
  
})

function loadCompliment() {

  var options = {
    url: "http://localhost:3000/random-compliment"
  }
  var results = $.ajax(options)
  results.done(function(object){
    var compliment = object.text;
    $('#compliment').text(compliment);
  })
}
