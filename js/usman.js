$(window).keydown(function(e) {
    e.defaultPrevented();

    var targetElement;
    
    if (e.keyCode == 40) {
        $targetElement = $('.active').next('section');
    }
   
    else if (e.keyCode == 38) {
        $targetElement = $('.active').prev('section');
    }
    if (!$targetElement.length) {return;}
    $('.active').removeClass('active');
    $targetElement.addClass('active');

       
    $('html, body').clearQueue().animate({scrollTop: $targetElement.offset().top }, 1000);
