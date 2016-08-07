
$(function (){

    //banner切换
    var swiper = new Swiper('.swiper-container-banner', {
        pagination: '.swiper-pagination-banner',
        paginationClickable: true,
        autoplay: 9000
    });

    <!--活动花絮-->
    var mySwiper = new Swiper('.active-swiper-con',{
        pagination: '.active-pagination',
        loop:true,
        grabCursor: true,
        paginationClickable: true
    })
    $('.arrow-left').on('click', function(e){
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $('.arrow-right').on('click', function(e){
        e.preventDefault()
        mySwiper.swipeNext()
    })

});
