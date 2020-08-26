$(document).ready(function(){

  /* ABOUT WIDGET */

  let counter = 2;

  $('#about-widget-call').on('mouseover', function(){
    counter++;
    $('#widget_about-fund_project, #widget_students, #widget_news , #widget_info').addClass('widget_header_off');
    $('#widget_about-fund_project, #widget_students, #widget_news , #widget_info').removeClass('widget_header_on');
    $("#widget_about_project").addClass('widget_header_on');
    $("#widget_about_project").removeClass('widget_header_off');
    $('.widget_about_bg').addClass('widget_about_bg_on')
    $('.widget_about_bg').removeClass('widget_about_bg_off')
  })

  $('.widget_about_bg').on('mouseover', function(){
    $(".widget").removeClass('widget_header_on');
    $(".widget").addClass('widget_header_off');
    $('.widget_about_bg').removeClass('widget_about_bg_on')
    $('.widget_about_bg').addClass('widget_about_bg_off')
    counter = 2;
  })

  // fund-widget-call
  // widget_about-fund_project

  $('#fund-widget-call').on('mouseover', function(){
    $('#widget_about_project, #widget_students, #widget_news ,#widget_incoming, #widget_info').addClass('widget_header_off');
    $('#widget_about_project, #widget_students, #widget_news ,#widget_incoming, #widget_info').removeClass('widget_header_on');
    $("#widget_about-fund_project").addClass('widget_header_on');
    $("#widget_about-fund_project").removeClass('widget_header_off');
    $('.widget_about_bg').addClass('widget_about_bg_on')
    $('.widget_about_bg').removeClass('widget_about_bg_off')
  })

  $('#news-widget-call').on('mouseover', function(){
    $('#widget_about-fund_project, #widget_about_project,#widget_incoming, #widget_students , #widget_info').addClass('widget_header_off');
    $('#widget_about-fund_project, #widget_about_project,#widget_incoming, #widget_students , #widget_info').removeClass('widget_header_on');
    $("#widget_news").addClass('widget_header_on');
    $("#widget_news").removeClass('widget_header_off');
    $('.widget_about_bg').addClass('widget_about_bg_on')
    $('.widget_about_bg').removeClass('widget_about_bg_off')
  })

  $('#students-widget-call').on('mouseover', function(){
    $('#widget_about-fund_project, #widget_about_project,#widget_news, #widget_incoming , #widget_info').addClass('widget_header_off');
    $('#widget_about-fund_project, #widget_about_project,#widget_news, #widget_incoming , #widget_info').removeClass('widget_header_on');
    $("#widget_students").addClass('widget_header_on');
    $("#widget_students").removeClass('widget_header_off');
    $('.widget_about_bg').addClass('widget_about_bg_on')
    $('.widget_about_bg').removeClass('widget_about_bg_off')
  })

  // incoming-widget-call
  // widget_incoming

  $('#incoming-widget-call').on('mouseover', function(){
    $('#widget_about-fund_project,#widget_students, #widget_about_project,#widget_news , #widget_info').addClass('widget_header_off');
    $('#widget_about-fund_project,#widget_students, #widget_about_project,#widget_news , #widget_info').removeClass('widget_header_on');
    $("#widget_incoming").addClass('widget_header_on');
    $("#widget_incoming").removeClass('widget_header_off');
    $('.widget_about_bg').addClass('widget_about_bg_on')
    $('.widget_about_bg').removeClass('widget_about_bg_off')
  })

  $('#information-widget-call').on('mouseover', function(){
    $('#widget_about-fund_project,#widget_students, #widget_about_project,#widget_news , #widget_incoming').addClass('widget_header_off');
    $('#widget_about-fund_project,#widget_students, #widget_about_project,#widget_news , #widget_incoming').removeClass('widget_header_on');
    $("#widget_info").addClass('widget_header_on');
    $("#widget_info").removeClass('widget_header_off');
    $('.widget_about_bg').addClass('widget_about_bg_on')
    $('.widget_about_bg').removeClass('widget_about_bg_off')
  })

  // information-widget-call
  // widget_info

  // students-widget-call

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

  /* ABOUT WIDGET */


  /* FOR STUDENTS WIDGET */

  // $('#students-widget-call').on('mouseover', function(){
  //   counter++;
  //   switch (counter%2){
  //     case 0:
  //       $("#widget_students").addClass('widget_header_on');
  //       $("#widget_students").removeClass('widget_header_off');
  //       $('.widget_about_bg').addClass('widget_about_bg_on')
  //       $('.widget_about_bg').removeClass('widget_about_bg_off')

  //       break;
  //     default:
  //       $("#widget_students").removeClass('widget_header_on');
  //       $("#widget_students").addClass('widget_header_off');
  //       $('.widget_about_bg').removeClass('widget_about_bg_on')
  //       $('.widget_about_bg').addClass('widget_about_bg_off')
  //       break;
  //   }
  // })

  $('.widget_about_bg').on('mouseover', function(){
    $("#widget_students").removeClass('widget_header_on');
    $("#widget_students").addClass('widget_header_off');
    $('.widget_about_bg').removeClass('widget_about_bg_on')
    $('.widget_about_bg').addClass('widget_about_bg_off')
    counter = 1;
  })


  /* FOR STUDENTS WIDGET */

  /* NEWS WIDGET */

  // news-widget-call

  // $('#news-widget-call').on('mouseover', function(){
  //   counter++;
  //   switch (counter%2){
  //     case 0:
  //       $("#widget_news").addClass('widget_header_on');
  //       $("#widget_news").removeClass('widget_header_off');
  //       $('.widget_about_bg').addClass('widget_about_bg_on')
  //       $('.widget_about_bg').removeClass('widget_about_bg_off')

  //       break;
  //     default:
  //       $("#widget_news").removeClass('widget_header_on');
  //       $("#widget_news").addClass('widget_header_off');
  //       $('.widget_about_bg').removeClass('widget_about_bg_on')
  //       $('.widget_about_bg').addClass('widget_about_bg_off')
  //       break;
  //   }
  // })

  // $('.widget_about_bg').on('mouseover', function(){
  //   $("#widget_news").removeClass('widget_header_on');
  //   $("#widget_news").addClass('widget_header_off');
  //   $('.widget_about_bg').removeClass('widget_about_bg_on')
  //   $('.widget_about_bg').addClass('widget_about_bg_off')
  //   counter = 1;
  // })


  /* NEWS WIDGET */


  /* INFORMATION WIDGET */


  // information-widget-call

  // $('#information-widget-call').on('mouseover', function(){
  //   counter++;
  //   switch (counter%2){
  //     case 0:
  //       $("#widget_info").addClass('widget_header_on');
  //       $("#widget_info").removeClass('widget_header_off');
  //       $('.widget_about_bg').addClass('widget_about_bg_on')
  //       $('.widget_about_bg').removeClass('widget_about_bg_off')

  //       break;
  //     default:
  //       $("#widget_info").removeClass('widget_header_on');
  //       $("#widget_info").addClass('widget_header_off');
  //       $('.widget_about_bg').removeClass('widget_about_bg_on')
  //       $('.widget_about_bg').addClass('widget_about_bg_off')
  //       break;
  //   }
  // })

  $('.widget_about_bg').on('mouseover', function(){
    $("#widget_info").removeClass('widget_header_on');
    $("#widget_info").addClass('widget_header_off');
    $('.widget_about_bg').removeClass('widget_about_bg_on')
    $('.widget_about_bg').addClass('widget_about_bg_off')
    counter = 1;
  })

  /* INFORMATION WIDGET */


  // $('#header-menu li').each(function(index){
  //   $(this).on('mouseover', function(){
  //     // console.log(index)
  //     // $('#header-menu .widget').addClass('widget_header_on')
  //     // console.log($(this).children('.widget'))
  //     $(this).children('.widget').addClass('widget_g')
  //   })
  // })


  /* SEARCH WIDGET */

  $("#call-search-widget").click(function(){
    $('.widget-search-wrapper').addClass('widget-search-wrapper-on')
    $('.widget-search-wrapper').removeClass('widget-search-wrapper-off')

    $('.widget_search').addClass('widget_search_on')
    $('.widget_search').removeClass('widget_search_off')
  })

  $('#search-widget-close').click(function(){
    $('.widget-search-wrapper').removeClass('widget-search-wrapper-on')
    $('.widget-search-wrapper').addClass('widget-search-wrapper-off')

    $('.widget_search').removeClass('widget_search_on')
    $('.widget_search').addClass('widget_search_off')
  })

  /* SEARCH WIDGET */

  /* FORM WIDGET */

  $('#call-form').click(function(){
    $('.widget-form-wrapper').removeClass('widget-off')
    $('.widget-form-wrapper').addClass('widget-on')
  })

  $('#widget-form-close').click(function(){
    $('.widget-form-wrapper').addClass('widget-off')
    $('.widget-form-wrapper').removeClass('widget-on')
  })

  /* FORM WIDGET */
})
