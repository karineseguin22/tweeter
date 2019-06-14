"use strict";
//make sure to install mongo in node_modules 

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
    if(err){
        console.error(`Failed to connect: ${MONGODB_URI}`);
        throw err;
    } 
    // ==> We have a connection to the "test-tweets" db,
    // starting here.
    console.log(`Connected to mongodb: ${MONGODB_URI}`); 

    // ===> Let's "get all the "tweeters". In Mongo-speak, we "find" them.
    db.collection("tweets").find({}, (err, result) => {
        // Lazy error handling:
        if (err) throw err;
    
       // ==> We can iterste on the cursor to get the results, one at a time:
        console.log("for each item yeilded by the cursor");
        result.each((err, item) => console.log(" ", item)); 

        //This is the end..
    db.close(); 
      });
}); 