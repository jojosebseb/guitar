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
      slidesToShow: 6,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      prevArrow: '<div class="arrow-container prev"></div>',
      nextArrow: '<div class="arrow-container next"></div>',
      dots: false,
      fade: false
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

$('.mobile-filter').on('click', function(){
    $('.product-filter').toggleClass('active');
})

var data, tempId, tempVal, curTags, tempIndex;
var currentFilter = [];

$('.filter-content-parent').on( 'click', '.filter-buble', function(){
    $(this).remove();
    data = $(this).data('for-target');
    $('#'+data).prop('checked', false);
    tempIndex = currentFilter.indexOf(tempVal);
    currentFilter.splice(tempIndex, 1);
    filterFunc();
})

$('.filter-check').on('click', function(){
    tempId = $(this).attr('id');
    tempVal = $(this).val();

    if($(this).prop('checked') == true){
        $('.filter-content-parent').append('<div class="filter-buble" data-for-target="'+tempId+'">'+tempVal+'</div>');
        currentFilter.push(tempVal);
    }else{
        $('*[data-for-target="'+tempId+'"]').remove();
        tempIndex = currentFilter.indexOf(tempVal);
        currentFilter.splice(tempIndex, 1);
    }
    filterFunc();
})

function filterFunc(){
    $('.product-module').addClass('hidden');
    $('.product-module').each(function(e){
        curTags = $(this).find('.tags').html();
        for (var i = 0; i < currentFilter.length; i++) {
            if (curTags.includes(currentFilter[i]) == true) {
                $(this).removeClass('hidden');
            }
        }
    });
    if (currentFilter.length === 0) {
        $('.product-module').removeClass('hidden');
    }
}
