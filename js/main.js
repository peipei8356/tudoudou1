require.config({

    //加载等待时间
    waitSeconds: 0,

    //配置Javascript文件映射路径
    paths: {
        jquery: 'lib/jquery.min',
        modernizr: 'lib/modernizr.custom',
        nicescroll: 'lib/jquery.nicescroll.min',
        tab: 'lib/tab',
        swiper: 'lib/swiper.min',
        appComm: 'appComm'
    },
    //模块依赖关系
    shim: {
        nicescroll: {deps: ['jquery']},
        tab: {deps: ['jquery']},
        swiper:{deps: ['jquery']}
    }
});

//浏览器判断
require(['modernizr'], function (modernizr) {
    !Modernizr.rgba ? window.location = "np.html" : '';
});

//配置页面加载模块
require(['jquery', 'nicescroll',  'tab', 'appComm'], function ($) {
    appComm.init();
});



