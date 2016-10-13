// Front end js goes here
$(document).ready(function () {
  showInitialCompliment();
  $('button').on('click', generateCompliment)
  $('button').on('click', changeBackgroundColor)
})

function generateCompliment(e) {
  e.preventDefault();
  console.log('generated compliment');
  $.ajax({
    url: 'http://localhost:3000/random-compliment',
  }) .done(function (data) {
    console.log(data);
        $('#compliment').html(data.text)
  })

}

function showInitialCompliment() {
  $.ajax({
    url: 'http://localhost:3000/random-compliment',
  }) .done(function (data) {
    console.log(data);
        $('#compliment').html(data.text)
  })
}

function changeBackgroundColor(e) {
    e.preventDefault();
    console.log('color change');

    var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];
    var randomColors = colors[Math.floor(Math.random()*colors.length)]

    $('#randoColor').css('background-color', randomColors)

}
