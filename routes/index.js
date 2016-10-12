var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/random-compliment', function (req, res) {
  // 1. Add several compliment objects to this array
  var compliments = [
    {
      text: 'Your code is flawless'
    },
    {
      text: 'You are a coding Unicorn'
    },
    {
      text: 'One day they"ll name a language after you'
    },
    {
      text: 'Zuck wants to hire you'
    }
  ]

  // 2. replace compliments[0] with a random compliment from the compliments array
  var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)]; //math.random()items[Math.floor(Math.random()*items.length)]

  // Return randomCompliment as json to the front end
  res.json(randomCompliment)
})



module.exports = router;
