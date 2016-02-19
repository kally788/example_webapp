
js.model.UserList = function () {

    var protected;
    var dictionaries = {};
    var newData = function(){
        var p = new js.model.vo.EntityVO();
        p.imgSmall = arguments[0];
        p.imgBig = arguments[1];
        p.outline = arguments[2];
        p.desc = arguments[3];
        p.name = arguments[4];
        p.age = arguments[5];
        p.gender = arguments[6];
        p.tel = arguments[7];
        protected.getData().push(p);
        dictionaries[p.name] = p;
    }

    this.getList = function(){
        return protected.getData();
    }

    this.getByName = function(name){
        return dictionaries[name];
    }

    this.onCreate = function(parent){
        protected = parent;
        parent.setData([]);

        //以下数据，可以通过服务器来获取，这里只为了演示，没有实现服务器端

        newData(
            "./images/img1.jpg",
            "./images/imgB1.jpg",
            "How are you doing?",
            "Hello, everyone!<br><br>\
            This is really a great honor to have this opportunity, and I believe I can make a good performance today.<br><br>\
            Now I will introduce myself briefly.My name is ...I came from Laifeng in Hubei Enshi, which is a small beautiful developing town. Does anyone know there?<br><br>\
            My hobbies are walking, seeing scenery and cheating and playing games on internet.I like playing basketball , football, table tennies and badminton in my leisure time.If some of you have similar hobbies, i am so glad that you can play whth me.I hope that i can study my English well,and make more friends in the future and have a very unforgettable college life!<br><br>\
            Thank you!",
            "Cassie",
            "Age:24",
            "♀",
            "13800000000"
        );

        newData(
            "./images/img2.jpg",
            "./images/imgB2.jpg",
            "Pleased to meet you again!",
            "Hello, everyone!<br><br>\
            This is really a great honor to have this opportunity, and I believe I can make a good performance today.<br><br>\
            Now I will introduce myself briefly.My name is ...I came from Laifeng in Hubei Enshi, which is a small beautiful developing town. Does anyone know there?<br><br>\
            My hobbies are walking, seeing scenery and cheating and playing games on internet.I like playing basketball , football, table tennies and badminton in my leisure time.If some of you have similar hobbies, i am so glad that you can play whth me.I hope that i can study my English well,and make more friends in the future and have a very unforgettable college life!<br><br>\
            Thank you!",
            "Rose",
            "Age:18",
            "♀",
            "13800000000"
        );

        newData(
            "./images/img3.jpg",
            "./images/imgB3.jpg",
            "I love sunshine.",
            "Hello, everyone!<br><br>\
            This is really a great honor to have this opportunity, and I believe I can make a good performance today.<br><br>\
            Now I will introduce myself briefly.My name is ...I came from Laifeng in Hubei Enshi, which is a small beautiful developing town. Does anyone know there?<br><br>\
            My hobbies are walking, seeing scenery and cheating and playing games on internet.I like playing basketball , football, table tennies and badminton in my leisure time.If some of you have similar hobbies, i am so glad that you can play whth me.I hope that i can study my English well,and make more friends in the future and have a very unforgettable college life!<br><br>\
            Thank you!",
            "Juliets",
            "Age:28",
            "♀",
            "13800000000"
        );

        newData(
            "./images/img4.jpg",
            "./images/imgB4.jpg",
            "I am a cartoon character.",
            "Hello, everyone!<br><br>\
            This is really a great honor to have this opportunity, and I believe I can make a good performance today.<br><br>\
            Now I will introduce myself briefly.My name is ...I came from Laifeng in Hubei Enshi, which is a small beautiful developing town. Does anyone know there?<br><br>\
            My hobbies are walking, seeing scenery and cheating and playing games on internet.I like playing basketball , football, table tennies and badminton in my leisure time.If some of you have similar hobbies, i am so glad that you can play whth me.I hope that i can study my English well,and make more friends in the future and have a very unforgettable college life!<br><br>\
            Thank you!",
            "Glow worm",
            "Age:12",
            "♀",
            "13800000000"
        );

        newData(
            "./images/img5.jpg",
            "./images/imgB5.jpg",
            "High cold is my usual practice!!",
            "Hello, everyone!<br><br>\
            This is really a great honor to have this opportunity, and I believe I can make a good performance today.<br><br>\
            Now I will introduce myself briefly.My name is ...I came from Laifeng in Hubei Enshi, which is a small beautiful developing town. Does anyone know there?<br><br>\
            My hobbies are walking, seeing scenery and cheating and playing games on internet.I like playing basketball , football, table tennies and badminton in my leisure time.If some of you have similar hobbies, i am so glad that you can play whth me.I hope that i can study my English well,and make more friends in the future and have a very unforgettable college life!<br><br>\
            Thank you!",
            "Marie",
            "Age:32",
            "♀",
            "13800000000"
        );

        newData(
            "./images/img6.jpg",
            "./images/imgB6.jpg",
            "I'm not pretending to be.",
            "Hello, everyone!<br><br>\
            This is really a great honor to have this opportunity, and I believe I can make a good performance today.<br><br>\
            Now I will introduce myself briefly.My name is ...I came from Laifeng in Hubei Enshi, which is a small beautiful developing town. Does anyone know there?<br><br>\
            My hobbies are walking, seeing scenery and cheating and playing games on internet.I like playing basketball , football, table tennies and badminton in my leisure time.If some of you have similar hobbies, i am so glad that you can play whth me.I hope that i can study my English well,and make more friends in the future and have a very unforgettable college life!<br><br>\
            Thank you!",
            "Gloria",
            "Age:16",
            "♀",
            "13800000000"
        );

        newData(
            "./images/img7.jpg",
            "./images/imgB7.jpg",
            "I don’t know what to say",
            "Hello, everyone!<br><br>\
            This is really a great honor to have this opportunity, and I believe I can make a good performance today.<br><br>\
            Now I will introduce myself briefly.My name is ...I came from Laifeng in Hubei Enshi, which is a small beautiful developing town. Does anyone know there?<br><br>\
            My hobbies are walking, seeing scenery and cheating and playing games on internet.I like playing basketball , football, table tennies and badminton in my leisure time.If some of you have similar hobbies, i am so glad that you can play whth me.I hope that i can study my English well,and make more friends in the future and have a very unforgettable college life!<br><br>\
            Thank you!",
            "Keri",
            "Age:17",
            "♀",
            "13800000000"
        );

        newData(
            "./images/img8.jpg",
            "./images/imgB8.jpg",
            "Black and white is my favorite!",
            "Hello, everyone!<br><br>\
            This is really a great honor to have this opportunity, and I believe I can make a good performance today.<br><br>\
            Now I will introduce myself briefly.My name is ...I came from Laifeng in Hubei Enshi, which is a small beautiful developing town. Does anyone know there?<br><br>\
            My hobbies are walking, seeing scenery and cheating and playing games on internet.I like playing basketball , football, table tennies and badminton in my leisure time.If some of you have similar hobbies, i am so glad that you can play whth me.I hope that i can study my English well,and make more friends in the future and have a very unforgettable college life!<br><br>\
            Thank you!",
            "Dai Anni",
            "Age:20",
            "♀",
            "13800000000"
        );
    }
}