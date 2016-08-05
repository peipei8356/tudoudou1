/**
 * Created by Admin on 2016/8/5.
 */
define([],function(){
    var page={};
    page.init=function(){
        $("#fileUploadBtn").click(function(){
            fileSelect();
        });
    };
    return page;
    //文件上传框弹出函数
    function fileSelect() {
        document.getElementById("fileToUpload").click();
    }

    function fileSelected() {
        // 文件选择后触发次函数
        alert("aa")
    }
});