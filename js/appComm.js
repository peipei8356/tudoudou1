//公用全局变量
var appComm = {};
appComm.chartArr = [];
appComm.init = function () {
    var pageJs = $("#currPage").attr("data-pageJs");
    if (typeof (pageJs) != 'undefined') {
        require([pageJs], function (page) {
            page.init();
        });
    }

};

