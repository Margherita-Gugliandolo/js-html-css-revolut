$(document).ready(function(){
 $('.parent-dropdown').mouseenter(function() {
   $(this).children('.dropdown').show();
});
 $('.parent-dropdown').mouseleave(function() {
   $(this).children('.dropdown').hide();
});

   $('div.list-name').click(function() {

   $(this).next('.faq').slideToggle();
 });


})
