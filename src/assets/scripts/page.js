(function ($) {
    
    $(document).ready(function(){        
        
        $('.page-section').viewportChecker({
            classToAdd: 'inView',  
        });
        $(".footer").viewportChecker({
            classToAdd: "inView",
            offset: "20%",
          });
        
        $('body').addClass('is-loaded');
        
    });
  
})(jQuery);  
