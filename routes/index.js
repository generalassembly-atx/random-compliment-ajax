var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/random-compliment', function (req, res) {
  // 1. Add several compliment objects to this array
  var compliments = [
    {
      text: 'Good job today!'
    },
    {
      text: 'You are so cool!'
    },
    {
      text: 'Great hair'
    },
    {
      text: 'You are so interesting'
    },
    {
      text: 'Nice shirt'
    },
    {
      text: 'Awesome pants'
    }
  ]

  // 2. replace compliments[0] with a random compliment from the compliments array
  var randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

  // Return randomCompliment as json to the front end
  res.json(randomCompliment)
})

module.exports = router;
