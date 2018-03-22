$(function(){
	
    var $window = $(window);
    

    $('.mobile-filter-toggle').on('click', function(){

        $('.job-filter-column').slideToggle('fast');

    });

    $('.btn-cancel').on('click', function(){

        if( $window.width() < 1110 ){

            $('.job-filter-column').slideToggle('fast');

        }

        $(this).closest('form').find('input[type=text], select').val('');
 
    });

    $('.mobile-nav-btn').on('click', function(){

        $(this).toggleClass('active');
        $('#mobile-nav, #main').toggleClass('active');
        $('body').toggleClass('no-scroll');

    });

    $window.on('resize', function(){

        if( $window.width() > 1110 ){
            $('.job-filter-column').show();
        } else{
            $('.job-filter-column').hide();
        }

        $('#mobile-nav, .mobile-nav-btn, #main').removeClass('active');
        $('body').removeClass('no-scroll');

    });

	
});


