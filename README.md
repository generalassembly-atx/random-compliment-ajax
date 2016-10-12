# WDI Emergency Compliment _in Express_

## Mission…

Create your own version of [Emergency Compliment](http://emergencycompliment.com/), using Express. When a user visits the site, they should be greeted with a WDI-themed compliment to cheer them up.


## Level 1: generic compliment

1. When you visit the root (`"/"`) of your app, it should display a randomly chosen compliment from the `"/random-compliment"` route.
2. When you click "Give me another compliment!" it should replace the compliment with another one from `"/random-compliment"`

Here are some sample compliments but feel free to substitute in your own:

```js
compliments = [
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
```

##HINTs
- [Check this out](http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array) on how to get a random thing from an array.
- All _front end_ javascript will be in `/public/javascripts/script.js`
- The compliments are being served from `/routes/index.js`


##BONUS:

When the user refreshes the page, the background color changes randomly. Here is an array of colors you can use if you'd like:

```js
colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];
```

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
