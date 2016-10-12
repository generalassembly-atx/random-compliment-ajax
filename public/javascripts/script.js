// Front end js goes here
$(document).ready(function () {
  $('#generateRandomCompliment').on('click', getCompliment)
});

function getCompliment() {
  var options = {
    url: 'http://localhost:3000/random-compliment'
  }
  var response = $.ajax(options);
  console.log(response);
}
