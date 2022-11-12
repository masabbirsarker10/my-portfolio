(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.navbar').fadeIn(2000).css('display', 'flex');
        } else {
            $('.navbar').fadeOut(2000).css('display', 'none');
        }
    });



    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn(1000);
        } else {
            $('.back-to-top').fadeOut(1000);
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 500, 'easeInOutExpo');
        return false;
    });

    
})(jQuery);

