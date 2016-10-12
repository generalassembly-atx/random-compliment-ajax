// Front end js goes here
$(document).ready(function () {
  // Your ajax code goes here
  loadCompliment()
  randomColor()

  $("#generateRandomCompliment").on('click', function () {
    loadCompliment()
  })
})

function randomColor() {
  var color = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];
  var randomC = color[Math.floor(Math.random()*color.length)];
  console.log(randomC);
  $('body').css('background-color', randomC)
}

function loadCompliment() {
  var options = {
    url: '/random-compliment'
  };
  var request = $.ajax(options);

  request.done(function(response) {
    $('h1').text(response.text);
    console.log(response);
  })


}
