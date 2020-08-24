$(document).ready(function(){

  $('.gallery-wrapper').each(function(index){
    $(this).on('click', function(){
      let numKey = $(this).attr('id')
      numKey = parseInt(numKey, 10)

      $('.gallery-modal').addClass('gallery-modal-on')
      $('.gallery-modal').removeClass('gallery-modal-off')
      $("html,body").css("overflow","hidden");

      var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
          slidesPerView: 4,
          freeMode: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
      });
    
      var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        initialSlide: numKey,
        loop: true,
          navigation: {
            nextEl: '.swiper-button-next-gallery',
            prevEl: '.swiper-button-prev-gallery',
          },
          thumbs: {
            swiper: galleryThumbs
          }
      })
    })
  })

  $('#gallery-modal-close').click(function(){
    $('.gallery-modal').removeClass('gallery-modal-on')
      $('.gallery-modal').addClass('gallery-modal-off')
      $("html,body").css("overflow","visible");
  })

})