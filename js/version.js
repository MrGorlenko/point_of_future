$(document).ready(function(){

  let counter = 2;

  $('#eye').click(function(){
    counter++;
    switch (counter%2){
      case 1:
        $('.jaw').addClass('jaw-active');
        break;
      default:
        $('.jaw').removeClass('jaw-active');
        break
    }
  })
})