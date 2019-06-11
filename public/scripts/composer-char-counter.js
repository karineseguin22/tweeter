console.log('trial'); 

//to make sure DOM loaded
$(document).ready(function(){
console.log('Successs!'); 
// console.log(keyup event);

$('.new-tweet form textarea').on('input', function(data){
    console.log(data);
    console.log(140 - ($(this).val()).length); 
    console.log($(this).parent()); 
    const counter = $(this).parent().find('.counter')
    counter.text(140 - ($(this).val()).length);
    (($(this).val()).length > 140 ) ? counter.addClass("red") :  counter.removeClass('red');
})

});