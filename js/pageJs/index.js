
$(function (){
    //banner切换
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 9000
    });

    //tab切换
    $('.tabcon li').plusTab({
        opt_2: '.wrapcon'
    });

    //动画
    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();
        if( scrollTop <= 550 ){
            $('.fun').removeClass('active');
        }
        if( scrollTop > 550 && scrollTop <= 800){
            $('.fun').removeClass('active');
            $('.fun1').addClass('active');
        }
        if( scrollTop > 1100 && scrollTop <= 1500){
            $('.fun').removeClass('active');
            $('.fun2').addClass('active');
        }
        if( scrollTop > 1600 && scrollTop <= 2550){
            $('.fun').removeClass('active');
            $('.fun3').addClass('active');
        }
        if( scrollTop > 2550){
            $('.fun').removeClass('active');
            $('.fun4').addClass('active');
        }
    });

});
