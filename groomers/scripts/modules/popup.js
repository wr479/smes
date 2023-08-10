export function  popup() {
    
  $(document).ready(function($) {
    $('.popup-open').click(function() {
      $('.popup-fade').fadeIn();
      return false;
    });	
    
    $('.popup-close').click(function() {
      $(this).parents('.popup-fade').fadeOut();
      return false;
    });		
   
    $(document).keydown(function(e) {
      if (e.keyCode === 27) {
        e.stopPropagation();
        $('.popup-fade').fadeOut();
      }
    });
    
    $('.popup-fade').click(function(e) {
      if ($(e.target).closest('.popup').length == 0) {
        $(this).fadeOut();					
      }
    });
    
    $('.popup-close').click(function() {
      $(this).parents('.popup-fade-2').fadeOut();
      return false;
    });	

    $('.call').on('click', function () {
      $('.type-question').removeClass('d-none')
      $('.type-category').addClass('d-none')
      let popup = $(".popup")
      popup.attr("data-type","recall")
    })

    $('.application').on('click', function () {
      $('.type-question').addClass('d-none')
      $('.type-category').removeClass('d-none')
      let popup = $(".popup")
      popup.attr("data-type","makeOrder")
    })
  });

   
    
    
 

   
 
}


