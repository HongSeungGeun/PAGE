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


// modal show

// movie-modal
for(let i = 0; i < 15; i++){
    $('.filmo-movie figure').eq(i).click(function(){
        $('.filmo-movie-modal').eq(i).css('display', 'block')
        $('.black-bg01').css('background', 'rgba(0, 0, 0, 0.5)')
        $('.black-bg02').css('visibility', 'visible')
    })
}
//  //movie-modal


// drama-modal
for(let i = 0; i < 15; i++){
    $('.filmo-drama figure').eq(i).click(function(){
        $('.filmo-drama-modal').eq(i).css('display', 'block')
        $('.black-bg01').css('background', 'rgba(0, 0, 0, 0.5)')
        $('.black-bg02').css('visibility', 'visible')
    })
}
// //drama-modal




// modal hide

$('.modal h2 i').click(function(){
    $('.modal').css('display','none')
    $('.black-bg01').css('background', 'rgba(0, 0, 0, 0)')
    $('.black-bg02').css('visibility', 'hidden')
})

$('.black-bg02').click(function(e){
    if(e.target == document.querySelector('.black-bg02')){
        $('.modal').css('display','none')
    }
})






// UL LI 클릭시 해당 CONTENT 보기



$('.title-movie').click(function(){
    $('.filmo-movie').css('display', 'block')
    $('.filmo-drama').css('display', 'none')
    $('.filmo-mv').css('display', 'none')
    $('.filmo-cf').css('display', 'none')
    $('.filmo-ost').css('display', 'none')
    $('.title-movie').css('color', '#F5A9F2')
    $('.title-drama').css('color', 'black')
    $('.title-ost').css('color', 'black')
    $('.title-mv').css('color', 'black')
    $('.title-cf').css('color', 'black')
})

$('.title-drama').click(function(){
    $('.filmo-movie').css('display', 'none')
    $('.filmo-drama').css('display', 'block')
    $('.filmo-mv').css('display', 'none')
    $('.filmo-cf').css('display', 'none')
    $('.filmo-ost').css('display', 'none')
    $('.title-movie').css('color', 'black')
    $('.title-drama').css('color', '#F5A9F2')
    $('.title-ost').css('color', 'black')
    $('.title-mv').css('color', 'black')
    $('.title-cf').css('color', 'black')
})

$('.title-ost').click(function(){
    $('.filmo-movie').css('display', 'none')
    $('.filmo-drama').css('display', 'none')
    $('.filmo-mv').css('display', 'none')
    $('.filmo-cf').css('display', 'none')
    $('.filmo-ost').css('display', 'block')
    $('.title-movie').css('color', 'black')
    $('.title-drama').css('color', 'black')
    $('.title-ost').css('color', '#F5A9F2')
    $('.title-mv').css('color', 'black')
    $('.title-cf').css('color', 'black')
})

$('.title-mv').click(function(){
    $('.filmo-movie').css('display', 'none')
    $('.filmo-drama').css('display', 'none')
    $('.filmo-mv').css('display', 'block')
    $('.filmo-cf').css('display', 'none')
    $('.filmo-ost').css('display', 'none')
    $('.title-movie').css('color', 'black')
    $('.title-drama').css('color', 'black')
    $('.title-ost').css('color', 'black')
    $('.title-mv').css('color', '#F5A9F2')
    $('.title-cf').css('color', 'black')
})

$('.title-cf').click(function(){
    $('.filmo-movie').css('display', 'none')
    $('.filmo-drama').css('display', 'none')
    $('.filmo-mv').css('display', 'none')
    $('.filmo-cf').css('display', 'block')
    $('.filmo-ost').css('display', 'none')
    $('.title-movie').css('color', 'black')
    $('.title-drama').css('color', 'black')
    $('.title-ost').css('color', 'black')
    $('.title-mv').css('color', 'black')
    $('.title-cf').css('color', '#F5A9F2')
})



$('.top-scroll').click(function(){
    $('html, body').animate({
        scrollTop : 0
    }, 400)
})