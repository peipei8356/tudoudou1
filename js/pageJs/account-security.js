/**
 * Created by Admin on 2016/8/3.
 */
define([],function(){
    var page={};
    page.init=function(){
        var getCode = document.getElementById('send-code');
        getCode.onclick = function(){
            appComm.getGetValidateCode60(this);
        };


    };
    return page;
});