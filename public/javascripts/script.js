// Front end js goes here
$(document).ready(function () {
  $('#generateRandomCompliment').on("click", newCompliment);
  // Your ajax code goes here
  //alert("it is working!")
  changeColors()
  newCompliment()
})

function changeColors(){
  colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];
  var randomColor = colors[Math.floor(Math.random()*colors.length)];
  $('#main').css('background-color', randomColor);
}

function newCompliment(){
  // event.preventDefault();
  // console.log("it works!");
  var options = {
    url: "/random-compliment"
  }
  $.ajax(options).done(function(response){
  $('#compliment').text(response.text);
  })
}
