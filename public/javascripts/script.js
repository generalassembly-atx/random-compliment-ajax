// Front end js goes here
$(document).ready(function () {
  getCompliment();
  $('#generateRandomCompliment').on('click', getCompliment)
});

function getCompliment() {
  var options = {
    url: 'http://localhost:3000/random-compliment'
  }
  var response = $.ajax(options);
  response.done(function(response){
    console.log('success');
    console.log(response);
    var compliment = response.text;
    $('#compliment').text(compliment);
  });
  response.fail(function(jqXHR, textStatus, errorThrown){
    console.log('textStatus: ' + textStatus);
    console.log('errorThrown: ' +errorThrown);
  });
}
