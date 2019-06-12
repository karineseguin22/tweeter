/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//create a function that returns true when moousemove over Tweet-Box
// function mousemove(){
$(document).ready(function(){
$('.Tweet-Box').on('mousemove', function(){
    console.log(data);
    //console.log($(this).addClass('mousehover')); 
    //return true; 
})

});
// }

// if (mousemove()){
//     console.log($(this).addClass('mousehover'));
// }

//mousemove or pointermove 