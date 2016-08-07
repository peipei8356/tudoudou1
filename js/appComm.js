//公用全局变量
var appComm = {};
appComm.chartArr = [];
appComm.init = function () {
    var pageJs = $("#currPage").attr("data-pageJs");
    appComm.appVersion();
    if (typeof (pageJs) != 'undefined') {
        require([pageJs], function (page) {
            page.init();
        });
    }
};
appComm.wait = 60;
//60秒后重新获取验证码
appComm.getGetValidateCode60=function(btn){
    if (appComm.wait===0) {
        btn.removeAttribute("disabled");
        btn.value = "获取验证码";
        appComm.wait = 60;
    }else{
        btn.setAttribute("disabled",true);
        btn.value = appComm.wait + "秒后重试";
        appComm.wait--;
        setTimeout(function(){
            appComm.getGetValidateCode60(btn);
        },1000);
    }
};
appComm.appVersion=function(){
    var browser=navigator.appName
    var b_version=navigator.appVersion
    var version=b_version.split(";");
    var trim_Version=version[1].replace(/[ ]/g,"");
   if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0")
    {
        //placehodler兼容IE8
        require([placehodler],function(){
        });
    }
};



