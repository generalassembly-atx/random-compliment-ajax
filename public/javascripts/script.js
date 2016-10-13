// Front end js goes here
$(document).ready(function () {
    getCompliment();
  $("#generateRandomCompliment").on("click", function(){
    getCompliment();
});
  // Your ajax code goes here
})

function getCompliment() {
  options = {
    url: 'http://localhost:3000/random-compliment'
  }
var response = $.ajax(options);
  response.done(function (response) {
    $('#compliment').html("<h1>" + response.text + "</h1>")
  });

    // console.log(response);
  response.fail(function(jqXHR, textStatus, errorThrown){

  });

};
