var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/random-compliment', function (req, res) {
  // 1. Add several compliment objects to this array
  var compliments = [
    {
      text: 'Hi you are awesome.'
    },
    {
      text: 'Hey thats a nice pair of jeans'
    },
    {
      text: 'You look very nice today'
    },
    {
      text: 'I like the way you think'
    },
    {
      text: 'You look downright sexy'
    },
    {
      text: 'What a nice shirt you are wearing today'
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
  var rand = Math.random() * compliments.length;
  rand = Math.floor(rand);
  console.log(rand);
  var randomCompliment = compliments[rand];

  // Return randomCompliment as json to the front end
  res.json(randomCompliment);
})

module.exports = router;
