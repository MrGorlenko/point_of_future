$(document).ready(function(){

  let sections = '.hero, .about, .founders, .news, .footer, .news-old';

  let burger_z = function(){
    $('.burger').addClass('burger-z')
    $('.burger').removeClass('burger-z-none')
  }

  let burger_z_none = function(){
    $('.burger').addClass('burger-z-none')
    $('.burger').removeClass('burger-z')
  }

  let content_off = function(){
    $(sections).addClass('display_none')
  }

  let content_on = function(){
    $(sections).removeClass('display_none')
  }

  $('#burger-toggle').click(function(){
    $('.burger').addClass('burger-active');
    $('.burger').removeClass('burger-passive');
    burger_z();
    content_off();
  })

  $('#burger-close').click(function(){
    $('.burger').removeClass('burger-active');
    $('.burger').addClass('burger-passive');
    burger_z_none();
    content_on();
  })



})
