var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

function randomColor() {
	var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];
	return colors[Math.floor(Math.random()*colors.length)];
}

router.get('/random-compliment', function (req, res) {
  // 1. Add several compliment objects to this array
  var compliments = [
    {
      text: 'This compliment is in routes/index.js'
    },
    {
      text: "Your instructors love you"
    },
    {
      text: "High five = ^5"
    },
    {
      text: "Amanda thinks you're wicked smart!"
    },
    {
      text: "Britney Jo is sooo proud of you! :)"
    },
    {
      text: "Sean would totally hire you."
    },
    {
      text: "It's almost beer o'clock!"
    }
  ]


  // 2. replace compliments[0] with a random compliment from the compliments array
  var randomNumber = Math.random()*compliments.length;
    randomNumber = Math.floor(randomNumber);
  
  var randomCompliment = compliments[randomNumber];

  // Return randomCompliment as json to the front end
  res.json(randomCompliment)
})

module.exports = router;
