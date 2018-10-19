//var $card = $('.card-wrapper');
//var $back = $('.card-back');
//var $light = $('.light');
//var active = 0;s
//
//$card.on('mousemove',function(e){
//    if(active == 0){
//        $card.css('transition','0.1s');
//    var centerX = $card.offset().left + 0.5*$card.width(),
//        centerY = $card.offset().top + 0.5*$card.height();
//    
//    var offsetX = 0.5 - (e.pageX - $card.offset().left)/$card.width(),
//        offsetY = 0.5 - (e.pageY - $card.offset().top)/$card.height();
//    
//    var dX = e.pageX - centerX,
//        dY = (e.pageY - centerY),
//        theta =  Math.atan2(dY, dX),
//        angle = theta * 180 / Math.PI - 90;
//        console.log(angle);
//    
//    var tranformData = 'scale(1.2) rotateX(' + -offsetY*20 + 'deg) rotateY(' + offsetX*20 + 'deg)';
//    
//    if(angle<0){
//        angle = angle+360;
//    }
//    
//    $light.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + (0.5-offsetY) * .5 + ') 0%,rgba(255,255,255,0) 80%)');
//    
//    $card.css('transform',tranformData);
//    
//    var transformLayer = 'translateX(' + offsetX * 10 + 'px) translateY(' + offsetY * 10 + 'px)';
//    
//    $('.layer1').css('transform',transformLayer);
//    
//    }
//    
//    
//});
//
//$card.mouseleave(function(){
//    var tranformData = 'scale(1) rotateX(0deg) rotateY(0deg)';
//    
//    $card.css('transform',tranformData);
//    
//    $light.css('background','linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 60%)');
//    
//    active = 0;
//    
//});
//
//$card.on('click',function(e){
//    
//    e.preventDefault();
//    
//    active = 1;
//    
//    $card.css('transition','0.5s');
//    
//    $('.card-wrapper').css('transform','scale(1.2) rotateY(180deg)');
//    
//    setTimeout(function(){
//        $card.css('transition','1s');
//        $('.card-wrapper').css('transform','scale(10) rotateY(180deg)');
//        setTimeout(function(){
//            window.location.href = $('.card').attr('href');
//        },500);
//    },500);
//
//    
//});
//
//$(window).load(function(){
//    $('.cover').fadeOut();
//});

(function (window, $) {


    $.fn.coolCards = function () {
        this.find('.card-wrapper').each(function () {

            var $card = $(this);
            var $back = $(this).find('.card-back');
            var $light = $(this).find('.light');
            var active = 0;

            $card.on('mousemove', function (e) {
                if(active == 0){
                    $card.css('transition', '0.1s');
                    var centerX = $card.offset().left + 0.5 * $card.width(),
                        centerY = $card.offset().top + 0.5 * $card.height();

                    var offsetX = 0.5 - (e.pageX - $card.offset().left) / $card.width(),
                        offsetY = 0.5 - (e.pageY - $card.offset().top) / $card.height();

                    var dX = e.pageX - centerX,
                        dY = (e.pageY - centerY),
                        theta = Math.atan2(dY, dX),
                        angle = theta * 180 / Math.PI - 90;
                    console.log(angle);

                    var tranformData = 'scale(1.2) rotateX(' + -offsetY * 20 + 'deg) rotateY(' + offsetX * 20 + 'deg)';

                    if (angle < 0) {
                        angle = angle + 360;
                    }

                    $light.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + (0.5 - offsetY) * .5 + ') 0%,rgba(255,255,255,0) 80%)');

                    $card.css('transform', tranformData);

                    var transformLayer = 'translateX(' + offsetX * 10 + 'px) translateY(' + offsetY * 10 + 'px)';

                    $card.find('.layer1').css('transform', transformLayer);

                }
            });

            $card.mouseleave(function () {
                
                if(active == 0){
                    
                var tranformData = 'scale(1) rotateX(0deg) rotateY(0deg)';

                $card.css('transform', tranformData);

                $light.css('background', 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 60%)');

                }
            });

            $card.on('click', function (e) {

                e.preventDefault();

                active = 1;

                $card.css('transition', '0.5s');

                $card.css('transform', 'scale(1.2) rotateY(180deg)');
                
                $card.css('z-index','999');

                setTimeout(function () {
                    $card.css('transition', '1s');
                    $card.css('transform', 'scale(10) rotateY(180deg)');
                    setTimeout(function () {
                        window.location.href = $('.card').attr('href');
                    }, 500);
                }, 500);


            });

        });
    }

})(window, jQuery);

$('.card-group').coolCards();

$(window).load(function(){
    $('.cover').fadeOut();
});