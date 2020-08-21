$(document).ready(function(){

  let burger_z = function(){
    $('.burger').addClass('burger-z')
    $('.burger').removeClass('burger-z-none')
  }

  let burger_z_none = function(){
    $('.burger').addClass('burger-z-none')
    $('.burger').removeClass('burger-z')
  }

  $('#burger-toggle').click(function(){
    $('.burger').addClass('burger-active');
    $('.burger').removeClass('burger-passive');
    setTimeout(burger_z, 0);
  })

  $('#burger-close').click(function(){
    $('.burger').removeClass('burger-active');
    $('.burger').addClass('burger-passive');
    setTimeout(burger_z_none, 0);
  })
})