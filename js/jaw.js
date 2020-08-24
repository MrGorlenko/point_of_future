$(document).ready(function(){

  let deformELements = 'p, a, span, button, input, select'

  $('#smallest').click(function(){
    $('p, span, input, select').css('font-size', '16px')
    $('a, button').css('font-size', '14px')
    $('.founder .info .role').css('font-size', '12px')
    $('.founder .info .role').css('line-height', '16px')
  })

  $('#small').click(function(){
    $(deformELements).css('font-size', '19px')
    $(deformELements).css('line-height', '19px')

  })

  $('#medium').click(function(){
    $(deformELements).css('font-size', '21px')
    $(deformELements).css('line-height', '21px')

  })
  
  $('#big').click(function(){
    $(deformELements).css('font-size', '25px')
    $(deformELements).css('line-height', '25px')

  })
})