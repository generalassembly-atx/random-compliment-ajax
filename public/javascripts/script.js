// Front end js goes here
$(document).ready(function () {
  // Your ajax code goes here
  newCompliment()

  $('#generateRandomCompliment').on('click', newCompliment)
})

function newCompliment() {
  $.ajax({
    url: 'http://localhost:3000/random-compliment'

  }).done(function (response) {
    console.log(response.text);
    $('a').text(response.text)
  }).always(function () {
    console.log('form submitted');
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
  })
}
