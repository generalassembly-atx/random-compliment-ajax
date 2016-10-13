var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/random-compliment', function (req, res) {
  // 1. Add several compliment objects to this array
  var compliments = [
    {
      text: "Your code's so flawless, it has no syntactical errors"
    },
    {
      text: "What's the route I need to GET your number?"
    },
    {
      text: "{name: me, loves: you}"
    },
    {
      text: "If (!you) { me = null }"
    },
    {
      text: "Class is better with you in it"
    },
    {
      text: "You are amazing! How did you make all that complicated code work!?"
    },
    {
      text: "Will you grant me the access key to your heart?"
    }
  ];

  // 2. replace compliments[0] with a random compliment from the compliments array
  var randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

  // Return randomCompliment as json to the front end
  res.json(randomCompliment);
})

module.exports = router;
