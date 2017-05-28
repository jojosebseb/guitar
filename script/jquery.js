var src, caption, info, thisInfo;
var bodySel, topSel, backSel, bindingSel, segmentId;
var curHigh, curMid, curLow, curId;

var highSel, midSel, lowSel, soundBar;

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
        top: (100 - (curHigh*10))+'%'
    });
    $('#hiMidBar').find('.filler').css({
        top: (100-((curHigh+curMid)/2)*10)+'%'
    });
    $('#midBar').find('.filler').css({
        top: (100 - (curMid*10))+'%'
    });
    $('#midLowBar').find('.filler').css({
        top: (100-((curMid+curLow)/2)*10)+'%'
    });
    $('#lowBar').find('.filler').css({
        top: (100 - (curLow*10))+'%'
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
    console.log('high= '+curHigh);
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
        topSel.html(caption);
    }
    else if (segmentId == 'buildBody') {
        bodySel.html(caption);
        highSel = parseInt($(this).find('.tone-high').html());
        midSel = parseInt($(this).find('.tone-mid').html());
        lowSel = parseInt($(this).find('.tone-low').html());

        curHigh = 5;
        curMid = 5;
        curLow = 5;

        curHigh = curHigh + highSel;
        curMid = curMid + midSel;
        curLow = curLow + lowSel;

    }
    else if (segmentId == 'buildBackSides') {
        backSel.html(caption);
    }
    else if (segmentId == 'bindingBuild') {
        bindingSel.html(caption);
    }
})



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
