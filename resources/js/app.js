$(document).ready(function(){
    //STICKY NAV
    
$('.js-projects').click(function(){
    $('html, body').animate({scrollTop: $('.projects-section').offset().top},1000);
  });
});