require.config({
    paths: {
        jquery: 'lib/jquery.min',
        tab: 'lib/tab',
        swiper: 'lib/swiper.min',
        jwplayer:'lib/jwplayer',
        appComm: 'appComm'
    },

    shim: {
        tab: {deps: ['jquery']},
        swiper:{deps: ['jquery']},
        jwplayer:{deps: ['jquery']}
    }
});


//配置页面加载模块
require(['jquery', 'swiper', 'tab', 'appComm'], function ($) {
    appComm.init();
});



