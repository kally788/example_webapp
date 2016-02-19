
js.contro.ChangeView = function (evtName, data) {

    //收到广播后，调用MODEL接口获取数据，并调用PAGE接口修改页面
    $jsmvc$.facade.reqPage("js.page.Page"+data).showPage();

}