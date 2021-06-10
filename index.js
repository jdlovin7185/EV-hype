const Twitter = require('twitter');
const morgan = require('morgan');
const config = require('./config.js');
const T = new Twitter(config);

// Set up search parameters
let params = {
  q: '#yolo',
  count: 1,
  result_type: 'recent',
  lang: 'en'
}

T.get('search/tweets', params, function(err, data, response) {
  if(!err){
    for(let i =0; i < data.statuses.length; i++){
      // Get the Tweet Id from returned data
      let id = { id: data.statuses[i].id_str }
      // Try to favorite the tweet
      T.post('favorites/create', id, function(err, response) {
        // if the favorite fails, log the error message
        if(err){
          console.log(err);
        }
        // if the favorite is successful, log the url of the tweet
        else { 
          let username = response.user.screen_name;
          let tweetId = response.id_str;
          console.log('Favorited: ',
          `https://twitter.com/${username}/status/${tweetId}`)
        }
      });
    }
  } else {
    console.log(err);
  }
})