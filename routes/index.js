var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/random-compliment', function (req, res) {
  // 1. Add several compliment objects to this array
  var compliments = [
    {
      text:'If you were born before sliced bread was created, you\'d be "the coolest thing since before sliced bread".'
    },
    {
      text: 'Your shoes look like you just bought them.'
    },
    {
      text: 'If you were a potato, you\'d be a cute potato.'
    },
    {
      text: 'On a scale of 1-10, you\'re pretty cool.'
    },
    {
      text: 'You have a face that most people wouldn\'t punch.'
    },
    {
    text: 'Compared to everybody else, you\'d probably would have a smaller chance of being killed by an angry prostitute. '
    },
    {
      text: 'This compliment page may have been made solely for you.'
    },
    {
      text: 'You click that button like a attractive person would.'
    },
    {
      text: 'You probably smell really nice.'
    }
  ]

  // 2. replace compliments[0] with a random compliment from the compliments array
  var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];

  // Return randomCompliment as json to the front end
  res.json(randomCompliment)
})

module.exports = router;
