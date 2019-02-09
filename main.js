$(function()
{
'use strict';
 $('.header').height($(window).height());



 $('.content').css('paddingTop',($(window).height()-$('.content').innerHeight())/2-40+'px');


 $('.header .down-icon i').click(function()
 {
  $('html,body').animate({
   scrollTop:$(this).offset().top
  },1000);
 });

/* testimonials slideshow */
$('.bxslider').bxSlider({
    captions: true,
    pager:false,
    auto:true
  });
$('.testimonials .row').css('paddingTop',$('.testimonials').height()/2-100+'px')  
  
  /* testimonials slideshow */



  });


