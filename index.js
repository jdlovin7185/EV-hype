require('dotenv').config()
const Twit = require('twit');

let T = new Twit ({
  consumer_key: process.env.TWIT_CONSUMER_KEY,
  consumer_secret: process.env.TWIT_CONSUMER_SECRET,
  access_token: process.env.TWIT_ACCESS_TOKEN,
  access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET, 
  strictSSL: true
});

//  T.post('statuses/update', { status: "🐳" }, function(err, data, response) {
//   console.log(data)
//   });

// T.post('statuses/retweet', { q: '#yolo', count: 2 }, 
// function(err, data, response) {
//   console.log(data)
// });

T.get('search/tweets', { q: 'banana', count: 5 }, function(err, data, response) {
  console.log(data)
});
