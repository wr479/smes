export function popup(){
    $('.open-popup').on('click',()=>{
        $('.popup-fade').removeClass('close').addClass('open')
    })
    
    $('.one-button').on('click',()=>{
        $('.kg').removeClass('close').addClass('open')
        $('.one-content').removeClass('open').addClass('close')
    })
    $('.two-button').on('click',()=>{
        $('.kg').removeClass("open").addClass('close')
        $('.three-content').removeClass('close').addClass('open')
    })
    $('.close-popup').on('click',()=>{
        $('.popup-fade').removeClass('open').addClass('close')
    })
}