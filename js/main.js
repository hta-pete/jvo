$(function(){
	
    var $window = $(window);

    $window.on('resize', function(){

        $('#mobile-nav, .mobile-nav-btn, #main').removeClass('active');
        $('body').removeClass('no-scroll');

        checkSize();

    });

    function checkSize(){

        if( $(".job-filter-column").css("float") == "none" ){
        
            $('.job-filter-column').css('display','none');

        } else{

            $('.job-filter-column').css('display','block');

        }

    }
    checkSize();
    
    $('.mobile-filter-toggle button').on('click', function(){

        if( !$('.job-filter-column').is(':visible') ){

            $('.job-filter-column').css('display','block');

        } else{

            $('.job-filter-column').css('display','none');

        }

    });

    $('.btn-cancel').on('click', function(){

        if( $(".job-filter-column").css("float") == "none" ){

            $('.job-filter-column').css('display','none');

        }

        $(this).closest('form').find('input[type=text], select').val('');
 
    });

    $('.mobile-nav-btn').on('click', function(){

        $(this).toggleClass('active');
        $('#mobile-nav, #main').toggleClass('active');
        $('body').toggleClass('no-scroll');

    });

    
	
});


