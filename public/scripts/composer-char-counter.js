console.log('trial'); 

//to make sure DOM loaded
$(document).ready(function(){
console.log('Successs!'); 
// console.log(keyup event);

$('.new-tweet form textarea').on('input', function(data){
    console.log(data);
    console.log(this); 
    console.log($(this).val()); 
    console.log(($(this).val()).length); 
    console.log(140 - ($(this).val()).length); 
})

});