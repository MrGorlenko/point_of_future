$(document).ready(function(){
  let galleryPic = [$('.gallery-big-1'), $('.gallery-small_1'), $('.gallery-small_2'), $('.gallery-small_3'), $('.gallery-small_4')];

  // // galleryPic.forEach(Element => console.log(Element))
  // galleryPic.forEach(Element.on('click', function(){
  //   alert('yo')
  // }))

  $('.gallery-wrapper').each(function(index){
    $(this).on('click', function(){
      // console.log(this.attr('id'))
      let numKey = $(this).attr('id')
      numKey = parseInt(numKey, 10)
      // console.log(typeof(numKey))
      // console.log(numKey)
      // console.log(typeof(int(numKey)))

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

  // console.log(numKey)

  // var galleryThumbs = new Swiper('.gallery-thumbs', {
  //   spaceBetween: 10,
  //     slidesPerView: 4,
  //     freeMode: true,
  //     watchSlidesVisibility: true,
  //     watchSlidesProgress: true,
  // });

  // var galleryTop = new Swiper('.gallery-top', {
  //   spaceBetween: 10,
  //     navigation: {
  //       nextEl: '.swiper-button-next-gallery',
  //       prevEl: '.swiper-button-prev-gallery',
  //     },
  //     thumbs: {
  //       swiper: galleryThumbs
  //     }
  // })

})