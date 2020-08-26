$(document).ready(function(){

  let sections = 'section, footer';

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
    $('#burger-menu .base ul, #burger-menu hr, #burger-menu .bottom, #burger-menu .links').css('opacity', '1')
    $('#burger-menu .base ul, #burger-menu hr, #burger-menu .bottom, #burger-menu .links').css('z-index', 'auto')
  })

  $('#burger-close').click(function(){
    $('.burger').removeClass('burger-active');
    $('.burger').addClass('burger-passive');
    burger_z_none();
    content_on();
  })


  $('.search-input').click(function(){
      $('#burger-menu .base ul, #burger-menu hr, #burger-menu .bottom, #burger-menu .links').css('opacity', '0')
      $('#burger-menu .base ul, #burger-menu hr, #burger-menu .bottom, #burger-menu .links').css('z-index', '-1')
  })





})
