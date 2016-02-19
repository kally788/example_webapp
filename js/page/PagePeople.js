js.page.PagePeople = function () {


    var self = this;
    var protected;

    this.onCreate = function(parent){
        protected = parent;
        protected.setStage($("body"));
        var item = protected.list.find(".item:eq(0)");
        protected.list.find(".item").remove();
        var listData = $jsmvc$.facade.reqModel("js.model.UserList").getList();
        for(var i=0;i<listData.length;i++){
            var data = listData[i];
            var newItem = item.clone();
            newItem.attr("id",data.name);
            newItem.find("img:eq(0)").attr("src",data.imgSmall);
            newItem.children(".text:eq(0)").html(data.outline);
            FastClick.attach(newItem.get(0));
            newItem.on("click",function(){
                if(self.isMove){
                    return;
                }
                var me = $(this);
                me.children("div").css("background-color","#efefef");
                setTimeout(function(){
                    me.children("div").css("background-color","#fff");
                },100);
                protected.dataList.push({
                    left:{name:"〈",func:function(){
                        if(self.isMove){
                            return;
                        }
                        protected.previousPage();
                    }},
                    middle:{name:$(this).attr("id"),func:null},
                    right:{name:"≡",func:protected.alertPop},
                    data:$jsmvc$.facade.reqModel("js.model.UserList").getByName($(this).attr("id"))
                });
                protected.createPage(false);
            });
            protected.list.append(newItem);
        }

        protected.dataList[0] = {
            //left:{name:"left",func:null},
            middle:{name:"People",func:null},
            right:{name:"≡",func:protected.alertPop}
        };
        protected.updateTop();

    };

    this.showPage = function(){
        this.supers.showPage();
        protected.btn1.addClass("btnFocus");
        protected.btn2.removeClass("btnFocus");
    }

}.extends("js.page.PageAbs");