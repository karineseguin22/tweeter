

$(document).ready(function(){ 

  const getDate = function (){ 
    const fullDate =new Date();
    const dd = String(fullDate.getDate()).padStart(2, '0');
    const mm =  String((fullDate.getMonth())+ 1).padStart(2, '0'); 
    const yyyy =  String(fullDate.getFullYear()); 
    const date = mm + '/' + dd + '/' + yyyy; 
    return date;
  }

  const data = [ ];
  
  const createTweetElement = tweet => { //creates ind tweet element
        
    let $article = $('<article>')
    .addClass('Tweet-Box');

    let $header = $('<header>').addClass('headerheight');

    let $topelements = $('<h2>').addClass(tweet.user.name);

    let $img = $('<img>').addClass('logo').attr('src',tweet.user.avatars.small);

    let $name = $('<span>').text(tweet.user.name);

    let $handle = $('<h3>').addClass('aname').text(tweet.user.handle);

    let $main = $('<main>');
  
    let $text = $('<p>').text(tweet.content.text);

    let $footer = $('<footer>').addClass('border');

    let $daysposted = $('<p>').addClass('nomargin').text(getDate());

    let $flag = $('<i>').addClass('fa fa-flag').addClass('hiddenIcons');
          
    let $retweet = $('<i>').addClass('fa fa-retweet').addClass('hiddenIcons');

    let $heart = $('<i>').addClass('fa fa-heart').addClass('hiddenIcons');
    

    $topelements.append($img).append($name);
    $header.append($topelements).append($handle); 
    $main.append($text); 
    $footer.append($daysposted).append($flag).append($retweet).append($heart); 
    $article.append($header).append($main).append($footer); 

    return $article;
        
    }
    
    //takes in an ARRAY of tweet objects AND append each one to the tweets-container
function renderTweets(tweets){
    for (let tweet of tweets){
    var $tweet = createTweetElement(tweet); 
        $('#Tweet-List').prepend($tweet);
    }

}

// Reusable Ajax request
//makes a twitter post 
const request = (options, cb) => {
   
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

const loadTweets = () => { //create a get request so I can see the posts when I refresh 
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

//remove hidden items on hover
//$(".Tweet-Box:h")

}); 