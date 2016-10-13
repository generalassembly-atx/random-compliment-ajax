// Front end js goes here
$(document).ready(function () {
  $('button').on('click', generateCompliment)
})

function generateCompliment(e) {
  e.preventDefault();
  console.log('generated compliment');
}
