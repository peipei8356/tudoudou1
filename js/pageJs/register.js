/**
 * Created by Admin on 2016/8/5.
 */
define([],function(){
    var page={};
    page.init=function(){
        $(".tabcon-li-02 li").on("click",function(){
            $(this).siblings("li").removeClass("on");
            $(this).addClass("on");
        });
        //验证码
        $("#send-mobile-code").click(function(){
            appComm.getGetValidateCode60(this);
        });


    };
    return page;
});