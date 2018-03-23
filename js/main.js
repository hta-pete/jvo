$(function(){
	
    var $window = $(window);
    
    $('.mobile-filter-toggle button').on('click', function(){

        

            $('.job-filter-column').slideToggle('fast');

         

    });

    $('.btn-cancel').on('click', function(){

        if( $window.width() < 1110 ){

            $('.job-filter-column').slideUp('fast');

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
            $('.job-filter-column').slideDown('fast');
        } else{
            $('.job-filter-column').slideUp('fast');
        }

        $('#mobile-nav, .mobile-nav-btn, #main').removeClass('active');
        $('body').removeClass('no-scroll');

    });
    
    if( $window.width() < 1110 ){
        $('.job-filter-column').slideUp('fast');
    } 
    

	
});


