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
