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
    }
    {
      text: 'Hey thats a nice pair of jeans'
    }
    {
      text: 'You look very nice today'
    }
    {
      text: 'I like the way you think'
    }
    {
      text: 'You look downright sexy'
    }
    {
      text: 'What a nice shirt you are wearing today'
    }
  ]

  // 2. replace compliments[0] with a random compliment from the compliments array
  var randomCompliment = compliments[0];

  // Return randomCompliment as json to the front end
  res.json(randomCompliment)
})

module.exports = router;
