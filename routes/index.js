var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/random-compliment', function (req, res) {
  // 1. Add 3 additional compliment objects to this array
  var compliments = [
    {
      text: 'You are swell!'
    }
  ]

  // 2. replace compliments[0] with a random compliment from the compliments array
  var randomCompliment = compliments[0];

  // Return randomCompliment as json to the front end
  res.json(randomCompliment)
})

module.exports = router;
