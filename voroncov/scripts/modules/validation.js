export function validation() {
    const urls = {
        makeOrder: '/api/make-order',
        recall: '/api/recall'
    }
    let ajaxData = {}

    
    function send_ajax(_data, type) {
        $.ajax({
            url: urls[type],
            method: "POST",
            data: JSON.stringify(_data),
        })
    }
    
    $('.makeOrder').on('click', () => {
        let numberInput = $('.numbers-tel')
        let inputs = $('.val')
        
        $.each(inputs, (key, input)=>{
            const type= $(input).attr('data-inputType')
            const value = $(input).val()
            if (value == '') {
                $(input).addClass('error');
            } else {
                $(input).removeClass('error').addClass('pop');
                ajaxData[type] = value
            }  
        })

        if (numberInput.val().length < 18){
            numberInput.addClass('error');
        } else{
            numberInput.removeClass('error');
        }
        if($('.error').length == 0){
            let type = $(".popup").attr("data-type")
            send_ajax(ajaxData, type)
        }
        // проверка на наличие полей с классом error
        // если нет, то вызываем фунцию с аяксом
    });
    
}