var src, caption, info, thisInfo;

$('.hover-notice').on('click', function(){

    thisInfo = $(this).parents('.build-tab').find('.info-container');
    thisInfo.addClass('active');
    src = $(this).parent().find('img').attr('src');
    caption = $(this).parent().find('.caption').html();
    info = $(this).parent().find('.info').html();

    thisInfo.find('img').attr('src', src);
    thisInfo.find('.caption-copy').html(caption);
    thisInfo.find('.info-copy').html(info);
})

$('.choice-module').on('click', function(){
    $(this).parents('.build-tab').find('.choice-module').removeClass('active');

    $(this).parents('.build-tab').addClass('active');
    $(this).addClass('active');

    caption = $(this).find('.caption').html();
    $(this).parents('.build-tab').find('.selected-title-summary').html(caption);
    $(this).parents('.build-tab').find('.title').addClass('active');

})

$('.close-btn').on('click', function(){
    $(this).parent().removeClass('active');
    $(this).parents('#popupParent').removeClass('active');
})

$('.jo-popup-parent').on('click', function(){
    src = $(this).find('.jo-popup').attr('src');
    $('#popupParent').addClass('active');
    $('#popupParent img').attr('src', src);
})

$('.choice-belt').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '<div class="custom-next"></div>',
    prevArrow: '<div class="custom-prev"></div>',
    infinite: false,

})
