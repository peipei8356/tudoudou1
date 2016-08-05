/**
 * Created by Admin on 2016/8/5.
 */
define(["pageJs/account-security"],function(acPage){
    var page={};
    page.init=function(){
        $(".tabcon-li-02 li").on("click",function(){
            $(this).siblings("li").removeClass("on");
            $(this).addClass("on");
        });

    };
    return page;
});