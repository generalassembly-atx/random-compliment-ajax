// Front end js goes here
$(document).ready(function () {
  // Your ajax code goes here
  newCompliment()
  newColor()
  $('#generateRandomCompliment').on('click', newCompliment)

})


function newColor() {
  var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];
  var backgroundChange = colors[Math.floor(Math.random() * colors.length)]
  console.log(backgroundChange);
  $('body').css("background-color", backgroundChange)
}



function newCompliment() {
  $.ajax({
    url: 'http://localhost:3000/random-compliment'

  }).done(function (response) {
    console.log(response.text);
    $('a').text(response.text);
  }).always(function () {
    console.log('form submitted');
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
  })


}
