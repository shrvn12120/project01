//preloader
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
 $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
 })

//for navbar
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  var containerFluid =  document.getElementById("containerFluid");
  
 


  if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 100) {
    containerFluid.style.backgroundColor = "rgba(0, 58, 137, 0.3)";
    containerFluid.style. transition = "all 0.5s ease-out";

   
    logoWhite.style. transition = "all 0.5s ease-out";

  } else {
  
    containerFluid.style.backgroundColor = "transparent";
   
    
  }
}
//nav bar hide when clicked
function hideNav(){
  var navBar = document.getElementById('navbarNav');
  var nav = document.querySelector('.show');

  navBar.classList.remove('show');
  

  
}
