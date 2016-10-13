var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/random-compliment', function (req, res) {
  // 1. Add several compliment objects to this array
  var compliments = [
    {
      text: 'You inspire me to be better'
    },

    {
      text: "I'd still like you if you listened to Nickleback"
    },
    {
      text: 'I almost like you as much as pizza'
    },
    {
      text: "alert('major key')"
    },
    {
      text: 'I dig your style'
    },
    {
      text: "You're so cool, even my parents like you more than me"
    },
    {
      text: 'You deserve a statue'
    },
    {
      text: "You’re a meh in a world of ughs."
    },
    {
      text: "I'd share a Netflix account with you"
    }
  ]

  // 2. replace compliments[0] with a random compliment from the compliments array
  var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
  console.log(randomCompliment);
  // Return randomCompliment as json to the front end
  res.json(randomCompliment)
})

module.exports = router;
