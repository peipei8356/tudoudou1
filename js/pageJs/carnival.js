
$(function (){

    //banner切换
    var swiper3 = new Swiper('.swiper-container-banner', {
        pagination: '.swiper-pagination-banner',
        paginationClickable: true,
        autoplay: 9000
    });

    var swiper2 = new Swiper('.swiper-container-active', {
        nextButton: '.swiper-button-next-active',
        prevButton: '.swiper-button-prev-active',
        pagination: '.swiper-pagination-active',
        paginationType: 'fraction'
    });
});
