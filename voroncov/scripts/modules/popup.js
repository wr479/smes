export function popup(){
    $('.open-popup').on('click', () => {
        $('.popup-fade').removeClass('close').addClass('open');
    });

    $('.choice button').on('click', function() {
        $('.choice button').removeClass('active');
        $(this).addClass('active'); 
    });
    $('.button-one button').on('click', function() {
        $('.button-one button').removeClass('active'); 
        $(this).addClass('active'); 
    });

    $('.one-button').on('click', () => {
        var activeButton = $('.button-one button.active');
        if (activeButton.length === 0) {
            $('.button-one button').addClass('error')
            return;
        }

        $('.one-content input').removeClass('error');
        $('.one-button').addClass('active');
        $('.kg').removeClass('close').addClass('open');
        $('.one-content').removeClass('open').addClass('close');
    });
    $('.two-button').on('click', () => {
        var inputValue = $('.kg input').val().trim();
        var activeButton = $('.choice button.active');
        
        if (inputValue === '' && activeButton.length === 0) {
            $('.kg input').addClass('error')
            $('.choice button ').addClass('error')
            return;
        }

        $('.kg input').css('border', 'none');
        $('.choice button').removeClass('active');
        $('.two-button').addClass('active');
        $('.kg').removeClass('open').addClass('close');
        $('.three-content').removeClass('close').addClass('open');
    });

    $('.final-button').on('click', () => {
        var phoneValue = $('.three-content input[type="tel"]').val().trim();
        var nameValue = $('.three-content input[type="text"]').val().trim();
        if (phoneValue === '' || nameValue === '') {
            $('.three-content input').addClass("error")
        } else {
            $('.three-content input').css('border', 'none');
            alert('Форма отправлена!');
        }
    });





    
    $('.close-popup').on('click',()=>{
        $('.popup-fade').removeClass('open').addClass('close');
        $('.popup-reviews').removeClass('open').addClass('close')
    })
    $('.open-reviews').on('click', ()=>{
        $('.popup-reviews').removeClass('close').addClass('open')
    })
    
}