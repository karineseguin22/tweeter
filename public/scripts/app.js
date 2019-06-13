/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//createTweetElement function -> takes a tweet object + return a tweet <article>



$(document).ready(function(){ 

    // Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
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
  }
  
    const createTweetElement = tweet => {
        
        let $article = $('<article>')
        .addClass('Tweet-Box');

        let $header = $('<header>').addClass('headerheight');

        let $topelements = $('<h2>').addClass('name');

        let $img = $('<img>').addClass('logo').attr('src',tweet.user.avatars.small);

        let $name = $('<span>').text('Karine Séguin');

        let $handle = $('<h3>').addClass('aname').text('@bob');

        let $main = $('<main>');
''
        let $text = $('<p>').text("hello");

        let $footer = $('<footer>').addClass('border');

        let $daysposted = $('<p>').addClass('nomargin').text('Ten days ago');

        $topelements.append($img).append($name);
        $header.append($topelements).append($handle); 
        $main.append($text); 
        $footer.append($daysposted); 
        $article.append($header).append($main).append($footer); 

        return $article;
        
    }
  
  var $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#Tweet-List').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

//create a render function calles renderTweets -> takes in an ARRAY of tweet objects AND 
//append each one to the tweets-container
}); 