$(document).ready(function(){


  // about-widget-call

  let counter = 1;
  $('#about-widget-call').click(function(){
    counter++;
    switch (counter%2){
      case 0:
        $(".widget_about").addClass('widget_about_on');
        $(".widget_about").removeClass('widget_about_off');
        break;
      default:
        $(".widget_about").removeClass('widget_about_on');
        $(".widget_about").addClass('widget_about_off');
        break;
    }
  })

  $('#widget-list li').each(function(index){
    $(this).on('mouseover', function(){
      $(this).children().first().css('display', 'block')
      $(this).children().css('color', '#55BA60');
    })
    $(this).on('mouseout', function(){
      $(this).children().first().css('display', 'none')
      $(this).children().css('color', '#3D4B53');
    })
  })
})