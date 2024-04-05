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


let checkcount01 = 0;
let checkcount02 = 0;

$('.check01').click(function(){
    checkcount01++;
    if(checkcount01 % 2 !==0){
        $('.check01 i').css('color' , '#F5A9F2')
    } else {
        $('.check01 i').css('color', '#000')
    }
})

$('.check02').click(function(){
    checkcount02++;
    if(checkcount02 % 2 !==0){
        $('.check02 i').css('color' , '#F5A9F2')
    } else {
        $('.check02 i').css('color', '#000')
    }
})

