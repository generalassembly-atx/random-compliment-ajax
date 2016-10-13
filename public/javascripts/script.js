// Front end js goes here
$(document).ready(function () {
  showInitialCompliment();
  $('button').on('click', generateCompliment)
})

function generateCompliment(e) {
  e.preventDefault();
  console.log('generated compliment');
}

function showInitialCompliment() {
  $.ajax({
    url: 'http://localhost:3000/random-compliment',
  }) .done(function (data) {
        $('#compliment').html(data.text)
  })

}
