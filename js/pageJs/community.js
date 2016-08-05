define([], function () {
    var page = {};
    page.init = function () {

        //banner切换
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 7000
        });

        $('.hf-btn').on('click', function () {
            $(this).next('div.huifu-box').show();
        });
        $('.close').on('click', function () {
            $(this).parents('div.huifu-box').hide();
        });
        $('.submit').on('click', function () {
            $(this).parents('div.huifu-box').hide();
        });

    };
    return page;
});