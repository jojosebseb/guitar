if($(window).scrollTop() > 0) {
   console.log('asd');
}

$(window).scroll(function(){
    if($(window).scrollTop() > 120) {
       $('#navbar').addClass('scrolled');
    }
    else {
        $('#navbar').removeClass('scrolled');
    }
    scrollTop = $(window).scrollTop();
})
var src;
$('.product-thumbnail > .thumbnail-module').on('click', function(){
    src = $(this).find('img').attr('src');
    $('.thumbnail-module').removeClass('active');
    $(this).addClass('active');
    $('#productShow').attr('src', src);
    $('#productShow').addClass('hide');
    $('.product-big').css({
        'background-image' : 'url('+src+')'
    })
})


$('.mobile-handle').on('click', function(){
    $(this).toggleClass('active');
    $('.nav-ul').toggleClass('active');
})


$('.feature-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    arrows: false,
    dots: true,
    responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
})


$('.product-thumbnail').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    prevArrow: '<div class="arrow-container prev"></div>',
    nextArrow: '<div class="arrow-container next"></div>',
    dots: false,
    responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      prevArrow: '<div class="arrow-container prev"></div>',
      nextArrow: '<div class="arrow-container next"></div>',
      dots: false,
      fade: true
    }
  },
]
})

$('#newsSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      swipe: true,
      dots: true,
    }
  },
]
})


$('.series-container').slick({
   slidesToShow: 3,
   responsive: [
 {
   breakpoint: 1024,
   settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: false,
     arrows: false,
     centerMode: true,
     dots: true,
   }
 },
]
})
