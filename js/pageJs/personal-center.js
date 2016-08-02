/**
 * Created by Administrator on 2016/8/1.
 */
define([],function(){
    var page={};
    page.init=function(){
        $(".main-left-cont li").on("click",function(){
            $(this).siblings("li").removeClass("on");
            $(this).addClass("on");
        });
       $(".edit-info-btn").on("click",function(){
           $(".edit-user-info").removeClass("hide");
           $(".user-info").addClass("hide");
       });
        $(".save-info-btn").on("click",function(){
            $(".user-info").removeClass("hide");
            $(".edit-user-info").addClass("hide");
        });
        //tab«–ªª
        $('.tabcon li').plusTab({
            opt_2: '.wrapcon'
        });

    };
    return page;
});
