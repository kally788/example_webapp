
$jsmvc$.run.addFacade(function(){

    this.CONS = new js.constant.Cons();

    //框架启动
    this.startup = function(){

        $jsmvc$.facade.reqContro("js.contro.ChangeView",this.CONS.GET_NOTICE_CHANG_EVIEW());
        $jsmvc$.facade.reqPage("js.page.PagePeople").showPage();
    }

});