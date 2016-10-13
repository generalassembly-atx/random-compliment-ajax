var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/random-compliment', function (req, res) {
  // 1. Add several compliment objects to this array
  var compliments = [
    {
      text: 'Your dead grandma would be proud of you.'
    },
    {
      text: 'You are doing a fantastic job, maybe'
    },
    {
      text: "One day you'll be Kanye"
    },
    {
      text: 'That hat looks not terrible on you.'
    },
    {
      text: 'You are the least worst Backstreet Boy'
    }
  ]

  var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];

  // Return randomCompliment as json to the front end
  res.json(randomCompliment)
})

module.exports = router;
