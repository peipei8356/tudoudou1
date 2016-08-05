
//实例化编辑器
//建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
var ue = UE.getEditor('editor',{
    toolbars: [
        [
            'source', //源代码
            '|',
            'undo', //撤销
            'redo', //重做
            '|',
            'justifyleft', //居左对齐
            'justifyright', //居右对齐
            'justifycenter', //居中对齐
            'justifyjustify', //两端对齐
            'insertorderedlist', //有序列表
            'insertunorderedlist', //无序列表
            'directionalityltr', //从左向右输入
            'directionalityrtl', //从右向左输入
            'indent', //首行缩进
            '|',
            'superscript', //上标
            'subscript', //下标
            'touppercase', //字母大写
            'tolowercase', //字母小写
            'spechars', //特殊字符
            '|',
            'bold', //加粗
            'italic', //斜体
            'underline', //下划线
            'strikethrough', //删除线
            'forecolor', //字体颜色
            'backcolor', //背景色
            'fontfamily', //字体
            'fontsize', //字号
            'fullscreen' //全屏
        ],
        [
            'paragraph', //段落格式
            'rowspacingtop', //段前距
            'rowspacingbottom', //段后距
            'lineheight', //行间距
            '|',
            'simpleupload', //单图上传
            'insertimage', //多图上传
            'imagenone', //默认
            'imageleft', //左浮动
            'imageright', //右浮动
            'imagecenter', //居中
            '|',
            'inserttable', //插入表格
            'deletetable', //删除表格
            'mergeright', //右合并单元格
            'mergedown', //下合并单元格
            'splittorows', //拆分成行
            'splittocols', //拆分成列
            'splittocells', //完全拆分单元格
            'mergecells', //合并多个单元格
            'insertrow', //前插入行
            'insertcol', //前插入列
            'deleterow', //删除行
            'deletecol', //删除列
            'edittable', //表格属性
            'edittd', //单元格属性
            '|',
            'map', //Baidu地图
            'emotion', //表情
            'anchor', //锚点
            'link', //超链接
            'unlink'//取消链接
        ],
        [
            'template', //模板
            'horizontal', //分隔线
            'background', //背景
            '|',
            'autotypeset', //自动排版
            'formatmatch', //格式刷
            'removeformat', //清除格式
            '|',
            'print', //打印
            'preview', //预览
            'cleardoc', //清空文档
            'drafts', // 从草稿箱加载
            '|',
            'help', //帮助
        ]
    ],
    autoFloatEnabled:false
});

/*
UEditor富文本编辑器文档
http://fex.baidu.com/ueditor/#start-start
*/

