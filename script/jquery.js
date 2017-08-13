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

var curBadge;
function badge(){
    $('.badge-container').each(function(){
        $(this).find('.badge').each(function(i){
            $(this).css({
                'transition-delay': i/10 +'s'
            })
        })
    })
}

badge();

$('.mobile-handle').on('click', function(){
    $(this).toggleClass('active');
    $('.nav-ul').toggleClass('active');
})


$('.feature-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
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
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
})
