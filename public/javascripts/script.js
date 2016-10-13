// Front end js goes here
$(document).ready(function () {
  loadCompliment()
  $('#generateRandomCompliment').on('click', newCompliment)
})

function newCompliment(e){
  loadCompliment();
}
function loadCompliment(){
  $.ajax({
      url: 'http://localhost:3000/random-compliment',
    }).done(function(response){
        //console.log(response);
        newBackground();
        $('h1#compliment').text(response.text);

    })
      .fail(function(header, message, code){
        console.log(message, code);
    })
      .always(function(){
        //console.log('I heart zebras');
    })
}
function newBackground(){
  var styleNum = Math.floor(Math.random() * 4) + 1;
  var styleClass = "theme" + styleNum;
  console.log(styleNum);
  $('body').attr("class", styleClass);
}
