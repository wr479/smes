export function faq(){
    $('.plus-one').on('click',() =>{
        $('.plus-one').removeClass('plus-one').addClass('plus-none-one');
        $('.none-one').removeClass('none-one').addClass('block-one');
        $('.minus-one').removeClass('minus-one').addClass('minus-block-one');
    });
    $('.click-one').on('click',() =>{
        $('.plus-none-one').removeClass('plus-none-one').addClass('plus-one');
        $('.block-one').removeClass('block-one').addClass('none-one');
        $('.minus-block-one').removeClass('minus-block-one').addClass('minus-one');
        console.log('43243');
    });

    $('.plus-two').on('click',() =>{
        $('.plus-two').removeClass('plus-two').addClass('plus-none-two');
        $('.none-two').removeClass('none-two').addClass('block-two');
        $('.minus-two').removeClass('minus-two').addClass('minus-block-two');
    });
    $('.click-two').on('click',() =>{
        $('.plus-none-two').removeClass('plus-none-two').addClass('plus-two');
        $('.block-two').removeClass('block-two').addClass('none-two');
        $('.minus-block-two').removeClass('minus-block-two').addClass('minus-two');
        console.log('43243');
    });

    $('.plus-three').on('click',() =>{
        $('.plus-three').removeClass('plus-three').addClass('plus-none-three');
        $('.none-three').removeClass('none-three').addClass('block-three');
        $('.minus-three').removeClass('minus-three').addClass('minus-block-three');
    });
    $('.click-three').on('click',() =>{
        $('.plus-none-three').removeClass('plus-none-three').addClass('plus-three');
        $('.block-three').removeClass('block-three').addClass('none-three');
        $('.minus-block-three').removeClass('minus-block-three').addClass('minus-three');
        console.log('43243');
    });


    $('.plus-four').on('click',() =>{
        $('.plus-four').removeClass('plus-four').addClass('plus-none-four');
        $('.none-four').removeClass('none-four').addClass('block-four');
        $('.minus-four').removeClass('minus-four').addClass('minus-block-four');
    });
    $('.click-four').on('click',() =>{
        $('.plus-none-four').removeClass('plus-none-four').addClass('plus-four');
        $('.block-four').removeClass('block-four').addClass('none-four');
        $('.minus-block-four').removeClass('minus-block-four').addClass('minus-four');
        console.log('43243');
    });


    $('.plus-five').on('click',() =>{
        $('.plus-five').removeClass('plusfive').addClass('plus-none-five');
        $('.none-five').removeClass('none-five').addClass('block-five');
        $('.minus-five').removeClass('minus-five').addClass('minus-block-five');
    });
    $('.click-five').on('click',() =>{
        $('.plus-none-five').removeClass('plus-none-five').addClass('plus-five');
        $('.block-five').removeClass('block-five').addClass('none-five');
        $('.minus-block-five').removeClass('minus-block-five').addClass('minus-five');
        console.log('43243');
    });



    $('.plus-six').on('click',() =>{
        $('.plus-six').removeClass('plus-six').addClass('plus-none-six');
        $('.none-six').removeClass('none-six').addClass('block-six');
        $('.minus-six').removeClass('minus-six').addClass('minus-block-six');
    });
    $('.click-six').on('click',() =>{
        $('.plus-none-six').removeClass('plus-none-six').addClass('plus-six');
        $('.block-six').removeClass('block-six').addClass('none-six');
        $('.minus-block-six').removeClass('minus-block-six').addClass('minus-six');
        console.log('43243');
    });
}