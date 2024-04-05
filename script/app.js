// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5; // 동작의 구현이 시작되는 위치
var navbarHeight = $('.header-fixed').outerHeight(); // 영향을 받을 요소를 선택

// 스크롤시에 사용자가 스크롤했다는 것을 알림
$(window).scroll(function(event){
    didScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 200);

// 동작을 구현
function hasScrolled() {
    // 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
    var st = $(this).scrollTop();
    
    // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
    if(Math.abs(lastScrollTop - st) <= delta){
        return;
    }
    
    // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header-fixed').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.header-fixed').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    // lastScrollTop 에 현재 스크롤위치를 지정한다.
    lastScrollTop = st;
}





















// menu-bar show
$('#open-btn').click(function(){
    $('.show').css('display', 'block')
    $('#open-btn').css('visibility', 'hidden')
    $('.black-bg02').css('visibility', 'visible')
    $('.black-bg01').css('background', 'rgba(0, 0, 0, 0.5)')
    $('.header-fixed').css('background', 'rgba(0, 0, 0, 0.1)')
})

// menu-bar hide
$('#close-btn').click(function(){
    $('.show').css('display', 'none')
    $('.black-bg02').css('visibility', 'hidden')
    $('#open-btn').css('visibility', 'visible')
    $('.black-bg01').css('background', 'rgba(0, 0, 0, 0)')
    $('.header-fixed').css('background', 'rgba(0, 0, 0, 0)')
})


$('.black-bg02').click(function(e){
    if(e.target == document.querySelector('.black-bg02')){
        $('.black-bg02').css('visibility','hidden')
        $('.show').css('display', 'none')
        $('#open-btn').css('visibility','visible')
        $('.black-bg01').css('background', 'rgba(0, 0, 0, 0)')
        $('.header-fixed').css('background', 'rgba(0, 0, 0, 0)')
    }
})





// poster hover


$('.white_box01').mouseover(function(){
    $('.hover01').css('display', 'block')
})


$('.white_box01').mouseleave(function(){
    $('.hover01').css('display', 'none')
})


$('.white_box02').mouseover(function(){
    $('.hover02').css('display', 'block')
})


$('.white_box02').mouseleave(function(){
    $('.hover02').css('display', 'none')
})


$('.white_box03').mouseover(function(){
    $('.hover03').css('display', 'block')
})


$('.white_box03').mouseleave(function(){
    $('.hover03').css('display', 'none')
})


$('.white_box04').mouseover(function(){
    $('.hover04').css('display', 'block')
})


$('.white_box04').mouseleave(function(){
    $('.hover04').css('display', 'none')
})


$('.white_box05').mouseover(function(){
    $('.hover05').css('display', 'block')
})


$('.white_box05').mouseleave(function(){
    $('.hover05').css('display', 'none')
})












let observer = new IntersectionObserver((e)=>{
    e.forEach((프로젝트)=>{
        if(프로젝트.isIntersecting){
        프로젝트.target.style.opacity = 1;
        프로젝트.target.style.transform = 'translateY(0px)';
        }else{
        프로젝트.target.style.opacity = 0;
        프로젝트.target.style.transform = 'translateY(-200px)';
        }
    })

})

let zero = document.querySelectorAll('div')
observer.observe(zero[35])





let observer01 = new IntersectionObserver((e)=>{
    e.forEach((프로젝트01)=>{
        if(프로젝트01.isIntersecting){
        프로젝트01.target.style.opacity = 1;
        프로젝트01.target.style.transform = 'translateX(0px)';
        }else{
        프로젝트01.target.style.opacity = 0;
        프로젝트01.target.style.transform = 'translateX(-200px)';
        }
    })

})

let one = document.querySelectorAll('div')
observer01.observe(one[36])








let observer02 = new IntersectionObserver((e)=>{
    e.forEach((프로젝트02)=>{
        if(프로젝트02.isIntersecting){
        프로젝트02.target.style.opacity = 1;
        프로젝트02.target.style.transform = 'translateX(0px)';
        }else{
        프로젝트02.target.style.opacity = 0;
        프로젝트02.target.style.transform = 'translateX(-100px)';
        }
    })

})

let two = document.querySelectorAll('div')
observer02.observe(two[37])
observer02.observe(two[38])
observer02.observe(two[39])
observer02.observe(two[40])
observer02.observe(two[41])
observer02.observe(two[42])
observer02.observe(two[43])






let observer03 = new IntersectionObserver((e)=>{
    e.forEach((프로젝트03)=>{
        if(프로젝트03.isIntersecting){
        프로젝트03.target.style.opacity = 1;
        }else{
        프로젝트03.target.style.opacity = 0;
        }
    })

})

let three = document.querySelectorAll('div')
observer03.observe(three[45])









let observer04 = new IntersectionObserver((e)=>{
    e.forEach((프로젝트04)=>{
        if(프로젝트04.isIntersecting){
        프로젝트04.target.style.opacity = 1;
        }else{
        프로젝트04.target.style.opacity = 0;
        }
    })

})

let four = document.querySelectorAll('div')
observer04.observe(four[48])
observer04.observe(four[51])
observer04.observe(four[54])
observer04.observe(four[57])













// 메인 이미지 fade-in out
setInterval(function(){
    $('.main-img ul li').eq(0).animate({opacity : '1'}, 1800)
    $('.main-img ul li').eq(1).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(2).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(3).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(4).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(5).animate({opacity : '0'}, 1800)
    $('.main-img ul li').delay('2000');

    $('.main-img ul li').eq(0).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(1).animate({opacity : '1'}, 1800)
    $('.main-img ul li').eq(2).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(3).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(4).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(5).animate({opacity : '0'}, 1800)
    $('.main-img ul li').delay('2000');

    $('.main-img ul li').eq(0).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(1).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(2).animate({opacity : '1'}, 1800)
    $('.main-img ul li').eq(3).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(4).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(5).animate({opacity : '0'}, 1800)
    $('.main-img ul li').delay('2000');

    $('.main-img ul li').eq(0).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(1).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(2).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(3).animate({opacity : '1'}, 1800)
    $('.main-img ul li').eq(4).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(5).animate({opacity : '0'}, 1800)
    $('.main-img ul li').delay('2000');

    $('.main-img ul li').eq(0).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(1).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(2).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(3).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(4).animate({opacity : '1'}, 1800)
    $('.main-img ul li').eq(5).animate({opacity : '0'}, 1800)
    $('.main-img ul li').delay('2000');

    $('.main-img ul li').eq(0).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(1).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(2).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(3).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(4).animate({opacity : '0'}, 1800)
    $('.main-img ul li').eq(5).animate({opacity : '1'}, 1800)
    $('.main-img ul li').delay('2000');
}, 2500)

// 메인 이미지 fade-in out

