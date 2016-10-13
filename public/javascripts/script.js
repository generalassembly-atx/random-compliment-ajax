// Front end js goes here
$(document).ready(function () {
  // Your ajax code goes here
  loadCompliment()
  $('button').on('click', loadCompliment)
  changeColors();
  $('button').on('click', changeColors)
})

var loadCompliment= function () {
  $.ajax({
    url:'http://localhost:3000/random-compliment'
  })
  .done(function (data) {
    // data=response;
    $('#compliment').text(data.text);
  })
}

var changeColors= function () {
  var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];
  var randomColor = colors[Math.floor(Math.random()*colors.length)];
  $('body').css('background-color', randomColor)
}
