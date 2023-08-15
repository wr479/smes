export function menu_mobile(){
    $('.mobile-svg').on('click', ()=>{
        $('header').removeClass('room')
        $('.black-line').addClass('black-line-on')
       $('.mobile-svg').removeClass('mobile-svg').addClass('close')
       $('.menu').removeClass('close').addClass('open')
    })
    $('.black-line').on('click', ()=>{
        $('header').addClass('room')
        $('.black-line').removeClass('black-line-on')
       $('.close').addClass('mobile-svg')
       $('.menu').removeClass('open').addClass('close')

    })
}