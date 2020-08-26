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


  let black = () => {
    $('*').css('background-color', '#000000')
    $('*').css('color', '#fff')
  },
  grey = () => {
    $('*').css('background-color', 'rgb(106 126 138)')
    $('*').css('color', '#fff')
  },
  green = () => {
    $('*').css('background-color', '#9cfda7')
    $('*').css('color', '#000')
  },
  blue = () => {
    $('*').css('background-color', '#2C5DE5')
    $('*').css('color', '#000')
  },
  normal = () => {
    $('*').removeAttr("style");
  }

  $('#black').click(function(){
    black();
  })

  $('#grey').click(function(){
    grey();
  })

  $('#green').click(function(){
    green();
  })

  $('#blue').click(function(){
    blue()
  })

  $('#come-back').click(function(){
    normal();
    $('.section-title h2').css('opacity', '0.2')
  })

  $('#grey, #black, #green, #blue').click(function(){
    $('.section-title h2').css('opacity', '0')
  })

})