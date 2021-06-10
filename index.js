const Twit = require('twit');
const T = new Twit({
  consumer_key: process.env.eR0PvSoG1EfRkd1IoIUocosIY,
  consumer_secret: process.env.W4XyHuTiLu7f07fBzqFggUnDO14AF0uayiovunJba5cWgVZZL4,
  access_token: process.env.1390130402627661827-DjjSTwZpyOVKRrqpezg10aiZINJZQG,
  access_token_secret: process.env.9caNozmeDEdlk3gyy3CJufeU8nKuCAUwg0SIFdE8VRxpk
});

// start stream and track tweets
const stream = T.stream('statuses/filter', {track: '#Rivian'});



// event handler
stream.on('tweet', tweet => {
  // perform action here
});