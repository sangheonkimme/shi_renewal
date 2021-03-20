$(document).on('click','a[href="#"]',function(e){
    e.preventDefault();
})

$(function(){
    mainInfo();
})

function mainInfo(){
    gnb();
    mainBanner();
}

function gnb() {
    $('#gnb li a').hover(function(){
    
        $('#header').removeClass('on')
        $('#header').addClass('on')
        $('#gnb > li > ul').slideDown(500)
    })
    $('#header').mouseleave(function(){
        $('#header').removeClass('on')
        $('#gnb > li > ul').slideUp(320)
    })

    $('#header .side-menu .lnr-magnifier').on('click',function(){
        $('#header .search-form').slideToggle();
    })

    $('#footer .family-site').on('click',function(){
        $('#footer .foot-top .family-site ul').toggleClass('on');
    })
    
    $('#footer .top-btn').on('click',function(){
        window.scrollTo({top:0, behavior:'smooth'});
    })
}

function mainBanner(){
    
    var $next = $('#mainVisual .paging-btn .next');
    var $prev = $('#mainVisual .paging-btn .prev');
    var $bannerli = $('#mainVisual .main-visual li');
    var $lipg = $('#mainVisual p.paging-circle span');

    var current=0, old=0, timerID=0, interval=4000 , size =  $bannerli.length; ;
    
    timerID = setInterval( make, interval );
    function make(){
        current++;
        if( current > size-1 ){ current = 0 }
        banner('100%','-100%');
    };

    $bannerli.hover(function(){
        clearInterval(timerID);
    },function(){
        clearInterval(timerID);
        timerID = setInterval( make, interval );
    })

    $next.on('click', function(){
        current ++;
        if( current > size-1 ){ current = 0 }
        clearInterval(timerID);
        banner('100%','-100%');
    })
    $prev.on('click', function(){
        current --;
        if( current < 0 ){ current = size - 1 }
        clearInterval(timerID);
        banner('-100%','100%');
    })
    $lipg.on('click', function(){
        current = $(this).index();
        clearInterval(timerID);
        banner('100%','-100%');
    })

    function banner(start, end){
        $bannerli.eq(current).stop().css({left:start}).animate({left:0},400)
        $bannerli.eq(old).stop().css({left:0}).animate({left:end},400)
        $lipg.removeClass();
        $lipg.eq(current).addClass('on');
        old = current;
    }
 
    
    
}
