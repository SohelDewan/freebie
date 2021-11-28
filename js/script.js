$(function () {
  $(".btn").click(function () {
      $('.bar').toggleClass('ber_ho')
  });
});

$('.img_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
    autoplay:false,
    autoplaySpeed:3000,

  });


  $('.solution_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:false,
    arrows:false,
    autoplay:true,
    autoplaySpeed:4000,
  });
  

    // About video play
    $('.venobox').venobox({
      spinner: 'cube-grid'
  });
        


