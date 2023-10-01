$(function(){
    mainInit();
    //링크막아주기 넣기
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
})

function mainInit(){
    gnb_menu()
    lan()
    main_visual()
    booking()
    content1()
    content2()
    content3()
    content5()
    top_btn()
}

 //메뉴
function gnb_menu(){
    let $gnbli = $('#header .nav > .gnb > li');
    let $subul = $('#header .nav .gnb li ul');
    let $header = $('#header');
    
    $subul.hide();

    $gnbli.hover(function(){
        $subul.show();
        $header.stop().animate({height:350},600);
        })

    $header.on('mouseleave', function(){
        $header.stop().animate({height:125},600);
        $subul.hide();
        })

}

function lan(){
    let $lani = $('#header .top-menu li:last-child');
    let $ul = $('#header .top-menu .lan');

    $ul.hide();

    $lani.on('click',function(){
        $ul.toggle();
    })
}





function main_visual(){
    let $banner = $('#visual .main-banner');
    let $bannerli = $('#visual .main-banner li');
    let $text = $('#visual .banner-text li');
    let $prev = $('#visual .btn-wrap .prev');
    let $next = $('#visual .btn-wrap .next');
    let $pause = $('#visual .btn-wrap .pause');
    let $bar = $('#visual .bg-paging .bar li')
    let old = 0, current = 0, size = $bannerli.length, 
    timer = null, interval = 5000;

    $text.hide().eq(0).show();

    timer = setInterval(make, interval);
    function make(){
        current++;
        if(current > size-1) {
            current=0;
        }
        banner('100%','-100%');
    }

    $prev.on('click', function(){
        current--;
        if(current < 0) {
            current = size-1;
        }
        banner('-100%','100%');
    })

    $next.on('click', function(){
        current++;
        if(current > size-1) {
            current=0;
        }
        banner('100%','-100%');
    })

    $pause.on('click', function(){

    })

    function banner(start, end){
        if(current != old) {
            $bannerli.eq(current).css({left:start}).animate({left:0},1000);
            $bannerli.eq(old).css({left:0}).animate({left:end},1000);
            $text.hide().eq(current).show();
            old = current;
            $bar.removeClass('on');
            $bar.eq(current).addClass('on');

            clearInterval(timer);
            timer = setInterval(make, interval);
        }
    }
}



function booking(){
    $minus = $('#visual .booking .minus');
    $plus = $('#visual .booking .plus');
    $count = $('#visual .booking .count');

    let cnt = 1;

    $minus.on('click',function(){
        cnt--;
        if(cnt<1){
            cnt = 3;
        }
        $count.text(cnt);
    })

    $plus.on('click',function(){
        cnt++;
        if(cnt>3){
            cnt = 1;
        }
        $count.text(cnt);
    })
}


function content1(){
    let $ul = $('.main .room-booking .room ul');
    let $li = $('.main .room-booking .room ul li');
    let $prev = $('.main .room-booking .button .prev');
    let $next = $('.main .room-booking .button .next');
    let first, last ;
    let timer = null , interval = 3000;


    timer = setInterval(make, interval);
    function make(){
        $ul.animate({marginLeft:'-=488'},400,function(){
            first = $('.main .room-booking .room ul li:first');
            $ul.append(first);
            $ul.css({marginLeft:'+=488'});
        })
    }

    $li.last();
    $ul.prepend(last);
    $ul.css({marginLeft:'-=425'}); 

    size = $li.width() 

    $prev.on('click',function(){
        $ul.animate({marginLeft:'+=488'}, 400, function(){
            last = $('.main .room-booking .room ul li:last');
            $ul.prepend(last);
            $ul.css({marginLeft:'-=488'});
        })
        clearInterval(timer);
        timer = setInterval(make, interval);
    })


    $next.on('click',function(){
        $ul.animate({marginLeft:'-=488'},400,function(){
            first = $('.main .room-booking .room ul li:first');
            $ul.append(first);
            $ul.css({marginLeft:'+=488'});
        })
        clearInterval(timer);
        timer = setInterval(make, interval);
    })


} 


function content2(){
    var swiper = new Swiper(".package-list", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });
}

function content3(){
    var swiper1 = new Swiper(".event-list", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });
}

function content5(){
    let $ul = $('.main .sns ul');
    let $li = $('.main .sns ul li');
    let $prev = $('.main .sns .btn-wrap .prev');
    let $next = $('.main .sns .btn-wrap .next');
    let timer = null, interval = 3000, first, last;

    timer = setInterval(make,interval);
    function make(){
        $ul.animate({marginLeft:'-=280'},400,function(){
            first = $('.main .sns ul li:first');
            $ul.append(first);
            $ul.css({marginLeft:'+=280'});
        })
    }

    $li.last();
    $ul.prepend(last);
    $ul.css({marginLeft:'-=280'}); 

    $prev.on('click',function(){
        $ul.animate({marginLeft:'+=280'}, 400, function(){
            last = $('.main .sns ul li:last');
            $ul.prepend(last);
            $ul.css({marginLeft:'-=280'});
        })
        clearInterval(timer);
        timer = setInterval(make, interval);
    })

    $next.on('click',function(){
        $ul.animate({marginLeft:'-=280'},400,function(){
            first = $('.main .sns ul li:first');
            $ul.append(first);
            $ul.css({marginLeft:'+=280'});
        })
        clearInterval(timer);
        timer = setInterval(make, interval);
    })
}


function top_btn(){
    let top = 0;
    $('.top-btn').hide();
    $(window).on('scroll', function(){
        top = $(this).scrollTop();                
        if(top>900){
            $('.top-btn').show();
        }else {
            $('.top-btn').hide();
        }
    })
    $('.top-btn').on('click',function(){
        $('html,body').animate({scrollTop:0}, 300)
    })
}