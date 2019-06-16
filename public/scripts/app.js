/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//createTweetElement function -> takes a tweet object + return a tweet <article>



$(document).ready(function(){ 

    // Test / driver code (temporary). Eventually will get this from the server.
    const data = [
 
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

        let $flag = $('<i>').addClass('fa fa-flag')
        
        let $retweet = $('<i>').addClass('fa fa-retweet')

        let $heart = $('<i>').addClass('fa fa-heart')
  

        $topelements.append($img).append($name);
        $header.append($topelements).append($handle); 
        $main.append($text); 
        $footer.append($daysposted).append($flag).append($retweet).append($heart); 
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
//makes a twitter post 
const request = (options, cb) => {

    /*Validate if tweet content
    1) not too long or not present
    2) form should not be cleared
    3)the form should not submit 
    */
   
    $.ajax(options)
      .done(response => cb(response))
      .fail(err => console.log(`Error: ${err}`))
      .always(() => console.log('Request completed.'));
};


$('#tweetform').on('submit',function(event){
    event.preventDefault();

    const text = $('#tweetform').find('textarea[name=text]').val(); //return text from textarea
   if (text.length <= 140 && text.length > 0) {
    $('#errormessage').slideUp("slow")//to hide error if it was previously displayed 
    const reqOptions = {
      url: '/tweets',
      method: 'POST',
      data:$(this).serialize(),  
    };

    request(reqOptions, tweet => {
        
      renderTweets([tweet]);
      console.log('text', text); 
      $('#tweetform').find('textarea[name=text]').val('');  
    });
   }else{
    $('#errormessage').slideDown("slow")//error message 
   }

  }); 



renderTweets(data); 



//create a get request to I can see the posts when I refresh 

const loadTweets = () => {
    const reqOptions = {
        url: '/tweets',
        method: 'get',
        dataType: 'json', 
    }
    request(reqOptions, function(response) {
        renderTweets(response); 
    });
};
      
loadTweets(); 

//New text box slide up or down when presses
 $("button").click(function() {
  $(".new-tweet").slideToggle("slow")
 }); 

 //autoselect text when click compose button 
$('button').click(function(){
  $("#area").select();
});

}); 