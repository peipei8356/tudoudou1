/**
 * Created by Admin on 2016/8/5.
 */
define(["pageJs/account-security"],function(acPage){
    var page={};
    page.init=function(){
        $(".send-email-code").click(function(){
            appComm.getGetValidateCode60(this);
        });

        //tab切换
        $('.tabcon li').plusTab({
            opt_2: '.wrapcon'
        });

    };
    return page;
});