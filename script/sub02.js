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

// for(let i = 0; i < 8; i++){
//     $('.photo-drama-page li').eq(i).click(function(){
//         $('.photo-drama-content').eq(i).css('display' , 'block')
//     })
// }

let moviecount = 0;
let dramacount = 0;
let etccount = 0;

$('.page-movie-btn').click(function(){
    moviecount++;
    $('.photo-movie-content').eq(moviecount).css('display', 'block')
})



$('.page-drama-btn').click(function(){
    dramacount++;
    $('.photo-drama-content').eq(dramacount).css('display', 'block')
})



$('.page-etc-btn').click(function(){
    etccount++;
    $('.photo-etc-content').eq(etccount).css('display', 'block')
})









$('.title-movie').click(function(){
    $('.photo-movie-box').css('display', 'block')
    $('.photo-drama-box').css('display', 'none')
    $('.photo-etc-box').css('display', 'none')

    $('.title-movie').css('color', '#F5A9F2')
    $('.title-drama').css('color', 'black')
    $('.title-etc').css('color', 'black')
})

$('.title-drama').click(function(){
    $('.photo-movie-box').css('display', 'none')
    $('.photo-drama-box').css('display', 'block')
    $('.photo-etc-box').css('display', 'none')

    $('.title-movie').css('color', 'black')
    $('.title-drama').css('color', '#F5A9F2')
    $('.title-etc').css('color', 'black')
})

$('.title-etc').click(function(){
    $('.photo-movie-box').css('display', 'none')
    $('.photo-drama-box').css('display', 'none')
    $('.photo-etc-box').css('display', 'block')

    $('.title-movie').css('color', 'black')
    $('.title-drama').css('color', 'black')
    $('.title-etc').css('color', '#F5A9F2')
})

$('.top-scroll').click(function(){
    $('html, body').animate({
        scrollTop : 0
    }, 400)
})