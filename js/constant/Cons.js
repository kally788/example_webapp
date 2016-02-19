
js.constant.Cons = function () {

    //把所有产量定义为私有变量
    var NOTICE_CHANG_EVIEW = "notice_chang_eview";

    //提供变量获取方法，通过只读方式来获取变量值可防止变量值被修改
    this.GET_NOTICE_CHANG_EVIEW = function(){
        return NOTICE_CHANG_EVIEW;
    }
};