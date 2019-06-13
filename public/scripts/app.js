/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//createTweetElement function -> takes a tweet object + return a tweet <article>



$(document).ready(function(){ 

    // Test / driver code (temporary). Eventually will get this from the server.
    const data = [
        {
          "user": {
            "name": "Newton",
            "avatars": {
              "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
              "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
              "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
            },
            "handle": "@SirIsaac"
          },
          "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
          },
          "created_at": 1461116232227
        },
        {
          "user": {
            "name": "Descartes",
            "avatars": {
              "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
              "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
              "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
            },
            "handle": "@rd" },
          "content": {
            "text": "Je pense , donc je suis"
          },
          "created_at": 1461113959088
        },
        {
          "user": {
            "name": "Johann von Goethe",
            "avatars": {
              "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
              "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
              "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
            },
            "handle": "@johann49"
          },
          "content": {
            "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
          },
          "created_at": 1461113796368
        }
      ];
  
    const createTweetElement = tweet => {
        
        let $article = $('<article>')
        .addClass('Tweet-Box');

        let $header = $('<header>').addClass('headerheight');

        let $topelements = $('<h2>').addClass(tweet.user.name);

        let $img = $('<img>').addClass('logo').attr('src',tweet.user.avatars.small);

        let $name = $('<span>').text(tweet.user.name);

        let $handle = $('<h3>').addClass('aname').text(tweet.user.handle);

        let $main = $('<main>');
''
        let $text = $('<p>').text(tweet.content.text);

        let $footer = $('<footer>').addClass('border');

        let $daysposted = $('<p>').addClass('nomargin').text('Ten days ago');

        $topelements.append($img).append($name);
        $header.append($topelements).append($handle); 
        $main.append($text); 
        $footer.append($daysposted); 
        $article.append($header).append($main).append($footer); 

        return $article;
        
    }
    
    //create a render function called renderTweets -> takes in an ARRAY of tweet objects AND 
//append each one to the tweets-container
function renderTweets(tweets){
    //loop though tweets (array)
    //var sortedTweets = tweets.sort((a,b)=> b.created_at - a.created_at)
    for (let tweet of tweets){
    //call createTweetElement for each Tweet
    var $tweet = createTweetElement(tweet); 
        $('#Tweet-List').prepend($tweet);
    //takes return value and appends to the tweets container
    }

}



  //var $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
//console.log($tweet); // to see what it looks like
//$('#Tweet-List').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

// Reusable Ajax request
const request = (options, cb) => {
    $.ajax(options)
      .done(response => cb(response))
      .fail(err => console.log(`Error: ${err}`))
      .always(() => console.log('Request completed.'));
};

$('#tweetform').on('submit',function(event){
    event.preventDefault();
    const reqOptions = {
      url: '/tweets',
      method: 'POST',
      data:$(this).serialize(),  
    };

    request(reqOptions, tweet => {
        
      renderTweets([tweet]);  
      console.log('tweet',tweet);
    });

  }); 


renderTweets(data); 
}); 


    
      
