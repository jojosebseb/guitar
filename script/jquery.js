var src, caption, info, thisInfo;
var bodySel, topSel, backSel, bindingSel, segmentId;
var curHigh, curMid, curLow, curId;

var highSel, midSel, lowSel, soundBar, totalMultiplier;

var totalHigh;

curHigh = 0;
curMid = 0;
curLow = 0;

bodySel = $('#bodySel');
topSel = $('#topSel');
backSel = $('#backSel');
bindingSel = $('#bindingSel');
soundBar = $('.sound-bar');

function toneBar(){

    $('#hiBar').find('.filler').css({
        top: (100 - (curHigh*10))+'%',
        opacity: (curHigh+3)/10
    });
    $('#hiMidBar').find('.filler').css({
        top: (100-((curHigh+curMid)/2)*10)+'%',
        opacity: (curHigh+3)/10
    });
    $('#midBar').find('.filler').css({
        top: (100 - (curMid*10))+'%',
        opacity: (curMid+3)/10
    });
    $('#midLowBar').find('.filler').css({
        top: (100-((curMid+curLow)/2)*10)+'%',
        opacity: (curLow+3)/10
    });
    $('#lowBar').find('.filler').css({
        top: (100 - (curLow*10))+'%',
        opacity: (curLow+3)/10
    });
}

function toneSim(){
    $.each( $('.choice-module'), function(i){
        if ($(this).hasClass('active')) {
            highSel+= parseInt($(this).find('.tone-high').html(), 10);
            midSel+= parseInt($(this).find('.tone-mid').html(), 10);
            lowSel+= parseInt($(this).find('.tone-low').html(), 10);
        }
    })

    curHigh = curHigh + highSel;
    curMid = curMid + midSel;
    curLow = curLow + lowSel;
}



$('.choice-module').on('click', function(){
    $(this).parents('.build-tab').find('.choice-module').removeClass('active');
    $(this).parents('.build-tab').addClass('active');
    $(this).addClass('active');
    caption = $(this).find('.caption').html();
    $(this).parents('.build-tab').find('.selected-title-summary').html(caption);
    $(this).parents('.build-tab').find('.title').addClass('active');

    highSel = 0;
    midSel = 0;
    lowSel = 0;
    curHigh = 0;
    curMid = 0;
    curLow = 0;
    toneSim();
    toneBar();

    //get segmentId to deteremine which part to be placed in the 'rightFloat'
    segmentId = $(this).parents('.build-tab').attr('id');

    if (segmentId == 'buildSoundBoard') {
        topSel.removeClass('active');
        setTimeout(function() {
            topSel.addClass('active');
            topSel.html(caption);
        }, 200);
    }
    else if (segmentId == 'buildBody') {
        bodySel.removeClass('active');
        setTimeout(function() {
            bodySel.addClass('active');
            bodySel.html(caption);
        }, 200);
    }
    else if (segmentId == 'buildBackSides') {
        backSel.removeClass('active');
        setTimeout(function() {
            backSel.addClass('active');
            backSel.html(caption);
        }, 200);
    }
    else if (segmentId == 'bindingBuild') {
        bindingSel.removeClass('active');
        setTimeout(function() {
            bindingSel.addClass('active');
            bindingSel.html(caption);
        }, 200);
    }
})



$('.hover-notice').on('click', function(){
    thisInfo = $(this).parents('.build-tab').find('.info-container');
    thisInfo.addClass('active');

    src = $(this).parent().find('img').attr('src');
    caption = $(this).parent().find('.caption').html();
    info = $(this).parent().find('.info').html();

    thisInfo.find('.caption-copy').addClass('blink');
    thisInfo.find('.info-copy').addClass('blink');
    thisInfo.find('img').addClass('blink');

    setTimeout(function() {
        thisInfo.find('.caption-copy').html(caption);
        thisInfo.find('.info-copy').html(info);
        thisInfo.find('img').attr('src', src);

        thisInfo.find('.caption-copy').removeClass('blink');
        thisInfo.find('.info-copy').removeClass('blink');
        thisInfo.find('img').removeClass('blink');
    }, 500);



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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '<div class="custom-next"></div>',
    prevArrow: '<div class="custom-prev"></div>',
    infinite: false,

})
