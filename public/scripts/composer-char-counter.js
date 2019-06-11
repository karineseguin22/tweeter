console.log('trial'); 

//to make sure DOM loaded
$(document).ready(function(){
console.log('Successs!'); 
// console.log(keyup event);

$('.new-tweet form textarea').on('input', function(data){
    console.log(data);
})

});