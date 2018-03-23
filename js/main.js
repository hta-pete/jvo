$(function(){
	
    var $window     = $(window);
    var cachedWidth = $window.width();

    $window.resize(function(){

        var newWidth = $window.width();

        if(newWidth !== cachedWidth){

            checkSize();
            cachedWidth = newWidth;
        }

        $('#mobile-nav, .mobile-nav-btn, #main').removeClass('active');
        $('body').removeClass('no-scroll');

    });

    function checkSize(){

        if( $(".job-filter-column").css("float") == "none" ){
        
            $('#form-job-filters').css('display','none');

        } else{

            $('#form-job-filters').css('display','block');

        }

    }
    checkSize();
    
    $('.mobile-filter-toggle button').on('click', function(){

        if( !$('#form-job-filters').is(':visible') ){

            $('#form-job-filters').css('display','block');

        } else{

            $('#form-job-filters').css('display','none');

        }

    });

    $('.quick-contact-toggle button').on('click', function(){

        if( !$('#form-quick-contact').is(':visible') ){

            $('#form-quick-contact').css('display','block');

        } else{

            $('#form-quick-contact').css('display','none');

        }

    });

    $('.btn-cancel').on('click', function(){

        if( $(".job-filter-column").css("float") == "none" ){

            $('#form-job-filters, #form-quick-contact').css('display','none');

        }

        $(this).closest('form').find('input[type=text], select').val('');
 
    });

    $('.mobile-nav-btn').on('click', function(){

        $(this).toggleClass('active');
        $('#mobile-nav, #main').toggleClass('active');
        $('body').toggleClass('no-scroll');

    });

    
	
});


