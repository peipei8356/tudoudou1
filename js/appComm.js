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
var wait = 60;
//60秒后重新获取验证码
appComm.getGetValidateCode60=function(btn){
    if (wait===0) {
        btn.removeAttribute("disabled");
        btn.value = "获取验证码";
        wait = 60;
    }else{
        btn.setAttribute("disabled",true);
        btn.value = wait + "秒后重试";
        wait--;
        setTimeout(function(){
            appComm.getGetValidateCode60(btn);
        },1000);
    }
};



