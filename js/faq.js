$(document).ready(function(){

  let counter = 1;

  $('.cell').each(function(index){
    $(this).click(function(){
      counter++;
      switch (counter%2){
        case 0:
          $(this).children('.wrapper').children('img').attr('src', 'img/faq-minus.svg');
          $(this).children('.content').removeClass('d-none')
          break;
        default:
          $(this).children('.wrapper').children('img').attr('src', 'img/faq-plus.svg');
          $(this).children('.content').addClass('d-none')
          break;
      }
    })
  })

  $('.questions .question').each(function(index){
    $(this).click(function(e){
      e.preventDefault()
      $(this).addClass('active')
      $(this).siblings().removeClass('active')
    })
  })
})