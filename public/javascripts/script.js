// Front end js goes here
$(document).ready(function() {
  // Your ajax code goes here
  $('body').css('background-color', colors.randomElement())
  loadRandom();
  $('#generateRandomCompliment').on('click', loadRandom);
});

Array.prototype.randomElement = function() {
  return this[Math.floor(Math.random() * this.length)]
};

colors = [
  '#595AB7',
  '#A57706',
  '#D11C24',
  '#C61C6F',
  '#BD3613',
  '#2176C7',
  '#259286',
  '#738A05'
]

function loadRandom() {
  $.ajax({url: '/random-compliment'}).done(function(response) {
    $('#compliment').html(response.text);
  })
}
