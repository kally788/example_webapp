js.page.PageAbs = function () {


    var self = this;
    var protected;

    //页面元素
    var layout,top,bottom,list,content,body,main,child;
    var topleft,topmiddle,topright;
    var btn1,btn2;
    this.isMove = false;

    //触摸开始坐标
    var x = 0, y = 0;

    //记录每一个页面的滚动位置，页面滚动时始终改变的是最后一个
    var rollPosition = [0];
    $(window).on("scroll",function(){
        rollPosition[rollPosition.length-1] = $(this).scrollTop();
    });

    //设置页面是否可以上下滚动和复制
    var preventRoll = function(e) {
        e.preventDefault();
    };
    var activePage = function(state){
        if(state){
            window.removeEventListener('touchstart', preventRoll);
        }else{
            window.addEventListener('touchstart', preventRoll);
        }
    }

    //根据2个元素高度，把body设置为高的那个值
    var changeHeight = function(item1, item2){
        if(!item2){
            body.css("min-height",item1.outerHeight(true));
            return;
        }
        var nY = item1.outerHeight(true);
        var pY = item2.outerHeight(true);
        body.css("min-height",nY>pY?nY:pY);
    }

    //新子页
    var pageList = [], dataList = [];
    var createPage = function(isOld){
        if(pageList.length<1){
            return;
        }
        self.isMove = true;
        closeDrag();
        activePage(false);
        var isMain;
        var newChild;
        var prevChild;
        if(isOld){
            isMain = pageList.length <= 2?true:false;
            prevChild = pageList[pageList.length-2];
            newChild = pageList[pageList.length-1];
        }else{
            isMain = pageList.length <= 1?true:false;
            prevChild = pageList[pageList.length-1];
            newChild = child.clone();
            newChild.append(content);
            newChild.css({"right":"-100%","top":rollPosition[rollPosition.length-1]-1});
            pageList[pageList.length-1].after(newChild);
            pageList.push(newChild);
            rollPosition.push(0);
            var data = dataList[dataList.length-1].data;
            var img = newChild.find("img:eq(0)");
            var imgBig = img.clone();
            imgBig.hide();
            img.after(imgBig);
            imgBig.one("load",function(){
                img.remove();
                imgBig.show();
            });
            img.attr("src", data.imgSmall);
            imgBig.attr("src", data.imgBig);

            newChild.find(".left:eq(0)").html(data.name);
            newChild.find(".middle:eq(0)").html(data.age);
            newChild.find(".right:eq(0)").html(data.gender);
            newChild.find(".desc:eq(0)").html(data.desc);
            newChild.find("a:eq(0)").attr("href","tel:"+data.tel);
        }

        changeHeight(prevChild,newChild);

        newChild.animate({right: "0%"}, 500,"easeOutExpo");
        if(isMain){
            prevChild.children("div").animate({"margin-left": "-50%"}, 800,"easeOutExpo");
        }else{
            prevChild.animate({"left": "-50%"}, 800,"easeOutExpo");
        }
        //使用定时器而不用animate结束事件是因为2个animate存在时间差，如果以animate时间长的来处理，存在prevChild.children("div")是2个事件，会重复执行2次
        setTimeout(function(){
            if(!isOld){
                $(window).scrollTop(0);
                newChild.css("top", -1);
                updateTop();
            }
            prevChild.css(isMain?"margin-top":"top", 0);
            prevChild.hide();
            changeHeight(newChild);
            activePage(true);
            if(pageList.length > 1){
                openDrag();
            }
            self.isMove = false;
        },800);
    }

    //回到上一页
    var previousPage = function(){
        if(pageList.length<2){
            return;
        }
        self.isMove = true;
        closeDrag();
        activePage(false);
        var isMain = pageList.length <= 2?true:false;
        var prevChild = pageList[pageList.length-2];
        var currChild = pageList[pageList.length-1];
        var positionP = rollPosition[rollPosition.length-2];
        var positionC = rollPosition[rollPosition.length-1];
        prevChild.show();
        prevChild.css(isMain?"margin-top":"top", 0-positionP+positionC);
        changeHeight(prevChild, currChild);

        currChild.animate({right: "-100%"},500,"easeOutExpo");
        if(isMain){
            prevChild.children("div").animate({"margin-left": "0%"}, 500,"easeOutExpo");
        }else{
            prevChild.animate({"left": "0%"}, 500,"easeOutExpo");
        }
        //使用定时器而不用animate结束事件是因为2个animate存在时间差，如果以animate时间长的来处理，存在prevChild.children("div")是2个事件，会重复执行2次
        setTimeout(function(){
            $(window).scrollTop(positionP);
            prevChild.css(isMain?"margin-top":"top", 0);
            currChild.remove();
            pageList.pop();
            rollPosition.pop();
            dataList.pop();
            updateTop();
            setTimeout(function(){changeHeight(prevChild)},100);//此处有个BUG，如果不设置延时，会出现底部闪烁一下。原因不明
            activePage(true);
            if(pageList.length > 1){
                openDrag();
            }
            self.isMove = false;
        },500);
    };

    //页面拖动效果
    var moveS = function(e){
        e.preventDefault();
        var prevChild = pageList[pageList.length-2];
        var currChild = pageList[pageList.length-1];
        var n = (x-e.targetTouches[0].pageX);
        if(n > 0){
            return;
        }
        currChild.css("right", (n/$(window).width()*100)+"%");
        if(pageList.length <= 2){
            prevChild.children("div").css("margin-left", (-50-(n/$(window).width()*50))+"%");
        }else{
            prevChild.css("left", (-50-(n/$(window).width()*50))+"%");
        }
        var z = (1-Math.abs(n/($(window).width())));
        currChild.css("box-shadow","-"+Math.round(20*(z*z*z))+"px 0px 15px #c2c2c2");
    }
    var moveE = function(e){
        var currChild = pageList[pageList.length-1];
        closeMove();
        if(currChild.offset().left < $(window).width()/2){
            createPage(true);
        }else{
            previousPage();
        }
    }
    var openMove = function(){
        window.addEventListener('touchmove', moveS);
        window.addEventListener('touchend', moveE);
        var isMain = pageList.length <= 2?true:false;
        var prevChild = pageList[pageList.length-2];
        var currChild = pageList[pageList.length-1];
        var positionP = rollPosition[rollPosition.length-2];
        var positionC = rollPosition[rollPosition.length-1];
        prevChild.show();
        prevChild.css(isMain?"margin-top":"top", 0-positionP+positionC);
        changeHeight(prevChild, currChild);
    }
    var closeMove = function(){
        window.removeEventListener('touchmove', moveS);
        window.removeEventListener('touchend', moveE);
    }

    //滑动手势
    var directionR = function(e){
        window.removeEventListener('touchend', directionR);
        openDrag();
    }
    var directionS = function(e){
        x = e.targetTouches[0].pageX;
        y = e.targetTouches[0].pageY;
    }
    var directionE = function(e){
        var cx = e.targetTouches[0].pageX;
        var cy = e.targetTouches[0].pageY;
        closeDrag();
        if(x <= 300 && x - cx < 0 && Math.abs(x - cx) > Math.abs(y - cy)){
            openMove();
        }else{
            window.addEventListener('touchend', directionR);
        }
    }
    var openDrag = function(){
        window.addEventListener('touchstart', directionS);
        window.addEventListener('touchmove',directionE);
    }
    var closeDrag = function(){
        window.removeEventListener('touchstart', directionS);
        window.removeEventListener('touchmove',directionE);
    }

    //顶部栏
    var updateTop = function(){
        var data = dataList[dataList.length-1];
        topleft.off("click").html("&nbsp;");
        topmiddle.off("click").html("&nbsp;");
        topright.off("click").html("&nbsp;");
        for(var i in data){
            if(i != "left" && i != "middle" && i != "right"){
                continue;
            }
            var item = data[i];
            var div = eval("top"+i);
            if(typeof  item == "object"){
                div.show();
                div.html(item.name);
                if(item.func){
                    div.on("click",item.func);
                }
            }
        }

    }

    //弹框
    var isPop = false;
    var alertPop = function(){
        if(isPop){
            return;
        }
        isPop = true;
        var pop = $(protected.getTemplate("html.pop"));
        //pop.get(0).addEventListener("touchstart",preventRoll);
        protected.getStage().prepend(pop);
        var btn = pop.children(".btn:eq(0)");
        var bg = pop.children(".bg:eq(0)");
        FastClick.attach(btn.get(0));
        FastClick.attach(bg.get(0));
        var h = pop.innerHeight();
        pop.css("bottom",0-h);
        var close = function(){
            bg.fadeOut(300);
            pop.animate({"bottom": 0-h}, 500,"easeOutExpo",function(){
                pop.get(0).removeEventListener("touchstart",preventRoll);
                pop.remove();
                isPop = false;
            });
        }
        btn.one("click",close);
        bg.one("click",close);
        pop.animate({"bottom": 0}, 500,"easeOutExpo");
    }

    this.onCreate = function(parent){
        protected = parent;
        protected.setStage($("body"));

        //创建模版
        layout = $(protected.setDisplay("html.layout"));
        top = $(protected.getTemplate("html.top"));
        bottom = $(protected.getTemplate("html.bottom"));
        list = $(protected.getTemplate("html.list"));
        content = $(protected.getTemplate("html.content"));

        //创建对象引用
        body = layout.find("#body");
        main = body.find("#main");
        child = body.find("#child");
        topleft = top.children(".left:eq(0)");
        topmiddle = top.children(".middle:eq(0)");
        topright = top.children(".right:eq(0)");
        FastClick.attach(topleft.get(0));
        FastClick.attach(topmiddle.get(0));
        FastClick.attach(topright.get(0));
        pageList[0] = main;

        //显示首页
        layout.find("#top").append(top);
        main.children("#list").append(list);
        main.children("#menu").append(bottom);
        child.remove();

        btn1 = bottom.find(".btn1:eq(0)");
        btn2 = bottom.find(".btn2:eq(0)");
        FastClick.attach(btn1.get(0));
        FastClick.attach(btn2.get(0));
        btn1.on("click",function(){
            $jsmvc$.facade.sendBroadcast($jsmvc$.facade.CONS.GET_NOTICE_CHANG_EVIEW(),"People");
        });
        btn2.on("click",function(){
            $jsmvc$.facade.sendBroadcast($jsmvc$.facade.CONS.GET_NOTICE_CHANG_EVIEW(),"Matter");
        });

        //添加列表点击事件

        //子类实现
        return {updateTop:updateTop,createPage:createPage,previousPage:previousPage,alertPop:alertPop,dataList:dataList,list:list,btn1:btn1,btn2:btn2}
    };

    //1.不在TOP的位置时，拖动页面结束后闪烁
    //2.拖页面时会出现上下滚动。。手势夸张时存在

}