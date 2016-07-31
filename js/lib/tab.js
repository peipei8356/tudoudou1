//*************tab切换插件*************//
$.fn.plusTab = function(options) {
  //定义要用的参数
  var opts = {
    opt_1: 'active',
    opt_2: '.tabBox',
    opt_3: 'hide',
    opt_4: '',
    opt_5: ''
  };
  var opt = $.extend(opts, options);
  return this.each(function() {
    var _obj = $(this);
    _obj.click(function(e) {
      e.stopPropagation();
      _obj.addClass(opt.opt_1).siblings().removeClass(opt.opt_1);
      var i = _obj.index();
      $(opt.opt_2 + '> div').eq(i).removeClass(opt.opt_3).siblings().addClass(opt.opt_3);
      //add tasksTop function Edit by Rose
      if (opt.opt_4) {
        _obj.parent().next(opt.opt_4).find('div:eq(' + i + ')').removeClass(opt.opt_3).siblings().addClass(opt.opt_3);
      }
      if (opt.opt_5) {}
    });
  });

};



