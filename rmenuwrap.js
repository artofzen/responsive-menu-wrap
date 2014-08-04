(function($) {
    
    $.fn.rmenuwrap = function(options) {
        
        var settings  = $.extend({
            mobileWrapperId : 'sfm-wrapper',
            mobileBtnId : 'sfm-btn',
            align : 'right',
            breakpoint : 767,
            duration : 500,
            currentWidth : -1
        }, options);
        
        var $menu = $(this);
        
        // setup mobile menu
        var $mobileMenuBtn = $('<div id="' + settings.mobileBtnId + '">')
            .addClass('sfm-menu-btn');
        
        // create our 3 lines for menu button
        for (var i = 0; i < 3 ; i++) {
            $mobileMenuBtn.append('<span class="menu-line">');
        }
        
        // add wrapper
        var $mobileMenuWrap = $('<div id="' + settings.mobileWrapperId + '">')
            .addClass('sfm-wrap')
            .css('text-align', settings.align)
            .append($mobileMenuBtn);
        
        // add wrapper to DOM
        $mobileMenuWrap.insertBefore($menu);
        
        // add our button click event to show/hide menu
        $mobileMenuBtn.bind('click', function() {
            $menu.animate({
                height : 'toggle'
            }, settings.duration);
        });
        
        // add resize event for our breakpoint to show menu button
        $(window).resize( function() {
            //On android scrolling fires a resize event - check that this is not the case
            if (settings.currentWidth != window.innerWidth) {       
                if (window.innerWidth <= settings.breakpoint) { // show our button - hide menu  
                    $mobileMenuBtn.removeClass('sfm-btn-hidden');
                    $menu.hide();
                } else {
                    $mobileMenuBtn.addClass('sfm-btn-hidden'); // hide our button - show menu
                    $menu.show();
                }  
            }
            
            settings.currentWidth = window.innerWidth;
            
        }).resize();
    };
    
}(jQuery));