$(document).ready(function() {
  // Your ajax code goes here
  getNewJoke();
  $('#generateRandomCompliment').on('click', getNewJoke);
})


// Front end js goes here
function getNewJoke() {
  $.ajax({
    url: '/random-compliment'
  }).done(function(response) {
    console.log(response);
    $('#compliment').text(response.text)
  })
}
