(function ($) {
    
    $(document).ready(function(){        
        
        $('.page-section').viewportChecker({
            classToAdd: 'inView',          
          
        });
        
        $('body').addClass('is-loaded');
        
    });
  
})(jQuery);  
