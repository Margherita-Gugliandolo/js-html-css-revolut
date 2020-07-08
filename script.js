$(document).ready(function(){

//Menu principale all'entrata ed uscita del mouse

 $('.parent-dropdown').mouseenter(function() {
   $(this).children('.dropdown').show();
});
 $('.parent-dropdown').mouseleave(function() {
   $(this).children('.dropdown').hide();
});

// Menu hamburger dropdown
   $('div.list-name').click(function() {

   $(this).next('.faq').slideToggle();

   // freccia su e giù
   var freccia = $('i').hasClass('.fa-chevron-down');
console.log(freccia);

 });

// Menu Hamburger

var menuHidden = true;

$('i.fas.fa-bars').click(
  function(){
    if(menuHidden == true){
      $('.hamburger-menu').addClass('show');
      menuHidden = false;
    } else {
      $('.hamburger-menu').removeClass('show');
      menuHidden = true;
    }
  }
);

$('i.fas.fa-times').click(
  function(){
    var active = $('.hamburger-menu').hasClass('show');
    if(active == true){
      $('.hamburger-menu').removeClass('show');
    } else {
      $('.hamburger-menu').addClass('show');
    }
  }
);

})
