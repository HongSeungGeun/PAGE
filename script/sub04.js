// menu-bar show
$('#open-btn').click(function(){
    $('.show').css('display', 'block')
    $('#open-btn').css('visibility', 'hidden')
    $('.black-bg02').css('visibility', 'visible')
    $('.black-bg01').css('background', 'rgba(0, 0, 0, 0.5)')
})

// menu-bar hide
$('#close-btn').click(function(){
    $('.show').css('display', 'none')
    $('.black-bg02').css('visibility', 'hidden')
    $('#open-btn').css('visibility', 'visible')
    $('.black-bg01').css('background', 'rgba(0, 0, 0, 0)')
})


$('.black-bg02').click(function(e){
    if(e.target == document.querySelector('.black-bg02')){
        $('.black-bg02').css('visibility','hidden')
        $('.show').css('display', 'none')
        $('#open-btn').css('visibility','visible')
        $('.black-bg01').css('background', 'rgba(0, 0, 0, 0)')
    }
})

$('.news-page-btn ul li').eq(0).click(function(){
    $('.news-box2').eq(0).css('display', 'block')
    $('.news-box2').eq(1).css('display', 'none')
    $('.news-box2').eq(2).css('display', 'none')
    $('.news-page-btn ul li').eq(0).css('color', '#F5A9F2')
    $('.news-page-btn ul li').eq(0).css('border-color', '#F5A9F2')
    $('.news-page-btn ul li').eq(1).css('color', 'black')
    $('.news-page-btn ul li').eq(1).css('border-color', 'black')
    $('.news-page-btn ul li').eq(2).css('color', 'black')
    $('.news-page-btn ul li').eq(2).css('border-color', 'black')
})

$('.news-page-btn ul li').eq(1).click(function(){
    $('.news-box2').eq(0).css('display', 'none')
    $('.news-box2').eq(1).css('display', 'block')
    $('.news-box2').eq(2).css('display', 'none')
    $('.news-page-btn ul li').eq(0).css('color', 'black')
    $('.news-page-btn ul li').eq(0).css('border-color', 'black')
    $('.news-page-btn ul li').eq(1).css('color', '#F5A9F2')
    $('.news-page-btn ul li').eq(1).css('border-color', '#F5A9F2')
    $('.news-page-btn ul li').eq(2).css('color', 'black')
    $('.news-page-btn ul li').eq(2).css('border-color', 'black')
})

$('.news-page-btn ul li').eq(2).click(function(){
    $('.news-box2').eq(0).css('display', 'none')
    $('.news-box2').eq(1).css('display', 'none')
    $('.news-box2').eq(2).css('display', 'block')
    $('.news-page-btn ul li').eq(0).css('color', 'black')
    $('.news-page-btn ul li').eq(0).css('border-color', 'black')
    $('.news-page-btn ul li').eq(1).css('color', 'black')
    $('.news-page-btn ul li').eq(1).css('border-color', 'black')
    $('.news-page-btn ul li').eq(2).css('color', '#F5A9F2')
    $('.news-page-btn ul li').eq(2).css('border-color', '#F5A9F2')
})