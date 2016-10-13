var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/random-compliment', function (req, res) {
  // 1. Add several compliment objects to this array
  var compliments = [
    {
      text: "I've never SEEN so many good things about a person. Today."
    },
    {
      text: 'Your fingers are so dextrous.'
    },
    {
      text: "I've never seen so many good codes!"
    },
    {
      text: "Wow. Such codes."
    },
    {
      text: "Perfect codes."
    },
    {
      text: "Much brains."
    },
    {
      text: "You're so hot at web developing."
    },
    {
      text: "Your grammar is on fleek."
    },
    {
      text: "I've heard of you."
    },
    {
      text: "Is there anything you CAN'T do!?"
    },
    {
      text: "You're pretty."
    },
    {
      text: "You did that thing really well."
    },
    {
      text: "You're so brave."
    },
    {
      text: "You're awesome at that thing we were talking about earlier."
    },
    {
      text: "Your elevator etiquette is on point."
    },
    {
      text: "You could have won my 5th grade spelling bee."
    },
    {
      text: "Cool name."
    },
    {
      text: "Nice nose."
    }
  ]

  // 2. replace compliments[0] with a random compliment from the compliments array
  var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];

  // Return randomCompliment as json to the front end
  res.json(randomCompliment)
})

module.exports = router;
