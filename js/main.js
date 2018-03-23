$(function(){
	
    var $window = $(window);
    
    $('.mobile-filter-toggle button').on('click', function(){

        if( !$('.job-filter-column').is(':visible') ){

            $('.job-filter-column').css('display','block');

        } 

    });

    $('.btn-cancel').on('click', function(){

        if( $window.width() < 1110 ){

            $('.job-filter-column').css('display','none');

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
            $('.job-filter-column').css('display','block');
        } else{
            $('.job-filter-column').css('display','none');
        }

        $('#mobile-nav, .mobile-nav-btn, #main').removeClass('active');
        $('body').removeClass('no-scroll');

    });
    
    if( $window.width() < 1110 ){
        //$('.job-filter-column').css('display','none');
        $('.btn-cancel').trigger('click');
    } 
    

	
});


