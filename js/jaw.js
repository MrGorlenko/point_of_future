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

  $('#grey').click(function(){
    $('body').css('background-color', 'rgb(106 126 138)');
    $(deformELements).css('color', '#ffffff')
    $('h2, h1, h3').css('color', '#ffffff')
    $('.founder p').css('color', '#3D4B53')
  })

  $('#black').click(function(){
    // $('body').css('background-color', '#000000');
    // $(deformELements).css('color', '#ffffff')
    // $('h2, h1, h3').css('color', '#ffffff')
    // // $('.founder').css('background-color', '#000000');
    // $('.founder p').css('color', '#3D4B53')
    // $('.FAQ .question').css('color', '#fff')
    $('section').css('background-color', '#000000')
    $('*').css('color', '#fff')
    // $(this).siblings()
  })

  $('#green').click(function(){
    $('body').css('background-color', '#9cfda7');
    $('.founder p').css('color', '#000')
  })

  $('#blue').click(function(){
    $('body').css('background-color', '#2C5DE5');
    $(deformELements).css('color', '#fff')
    $('h2, h1, h3').css('color', '#fff')
    $('.founder p').css('color', '#3D4B53')
  })

  $('#come-back').click(function(){
    $('body').css('background-color', '#fff');
    $('p, span, a').css('color', '#3D4B53');
    $('button').css('color', '#3D4B53');
    $('p, span, input, select').css('font-size', '16px')
    $('a, button').css('font-size', '14px')
    $('.founder .info .role').css('font-size', '12px')
    $('.founder .info .role').css('line-height', '16px')
    $('h2, h3, h4').css('color', '#272B2D')
    $('.FAQ h3').css('color', '#3D4B53')
    $('.FAQ .question').css('color', '#3D4B53')
    $('.subwrite, .title-pic').css('opacity', '1')
  })

  $('#grey, #black, #green, #blue').click(function(){
    $('.subwrite, .title-pic').css('opacity', '0')
  })

})