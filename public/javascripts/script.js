// Front end js goes here
$(document).ready(function () {
  // Your ajax code goes here
  colorRandomizer();
  ajaxCall();
  $('#generateRandomCompliment').on('click', ajaxCall);
});

function ajaxCall() {
  $.ajax({
    url: '/random-compliment'
  })
    .done(function(response) {
      var compliment = response.text;
      $('#compliment').text(compliment);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    })
    .always(function() {
      console.log('I always run');
    });
}

function colorRandomizer() {
  var r = Math.round(Math.random() * 255);
  var g = Math.round(Math.random() * 255);
  var b = Math.round(Math.random() * 255);

  var color = "rgb(" + r + "," + g + "," + b + ")";

  $('body').css('background-color', color);
}
