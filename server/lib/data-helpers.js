"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      
        db.collection("tweets").insertOne(newTweet)
        .then(() => callback(null, newTweet))
        .catch((err) => callback(err))
     
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
    
      const sortNewestFirst = (a, b) => a.created_at - b.created_at;
      db.collection("tweets").find().sort(sortNewestFirst).
      toArray()
      .then((tweets) => {callback(null, tweets) })
      .catch((err)=> callback(err))

    }

  };
}
