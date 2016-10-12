// Front end js goes here
$(document).ready(function () {
  loadCompliment()
  $('#generateRandomCompliment').on('click', loadCompliment)
  changeColors();
  $('#generateRandomCompliment').on('click', changeColors)


})

var loadCompliment = function () {
  $.ajax({
    url: 'http://localhost:3000/random-compliment'
  })
  .done(function (data) {
    $('#compliment').text(data.text);
  })
}

var changeColors = function () {
  var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d","#ff0066","#0066ff", "#009900"];
  var randomColor = colors[Math.floor(Math.random()*colors.length)];
  $('body').css('background-color', randomColor)
}
