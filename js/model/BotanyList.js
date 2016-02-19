
js.model.BotanyList = function () {

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
            "./images/img1_z.jpg",
            "./images/imgB1_z.jpg",
            "The is maple leaves",
            "The maple leaf is the maple leaves, usually palmately 5 - lobed, ca. 1.3 cm wide, slightly larger than a palm, three largest lobes with a small number of prominent teeth, base cordate, face of blade is coarse above green to dark green, below the veins have hair fall turns yellow to orange or red. But a small area for dark, dark green.<br><br>\
             Maple leaf (maple leaf) florid: self-control, like the flower you have your own set of life principles, positive enterprising, and constantly move forward. Emotionally. You look more retreat, still cherish the memory of the first love, for love produces fear, in fact, as long as you know from the experience of failure and improve ourselves, to find true love and difficult.<br><br>\
             Flower proverb: when the soft gentle, when the display will be angry",
            "Maple leaf",
            "Len:13",
            "Tree",
            "13800000000"
        );

        newData(
            "./images/img2_z.jpg",
            "./images/imgB2_z.jpg",
            "Telosma cordata (Burm. f.) Merr.",
            "Fragrant flowers, particularly at night is more prosperous, on human health is extremely unfavorable, so at night should not be on the evening primrose Cong long ago.<br><br>\
             Often cultivated for viewing. Southern China has taken the flower and meat fried food speculation. Flowers can be steamed sesame oil. Flowers, leaves can be medicinal, liver, eyesight, nebula, South China area folk useful for treating conjunctivitis, malnutrition of eye disease. Growing in the hillside shrub, native to the Southern China region of China, is now in the southern provinces of China are cultivated. Tropical and subtropical Asia and Europe and the Americas are cultivated",
            "Telosma",
            "Len:0.5",
            "Flower",
            "13800000000"
        );

        newData(
            "./images/img3_z.jpg",
            "./images/imgB3_z.jpg",
            "Open one thousand years",
            "The other shore flowers, open one thousand years, down one thousand years, flower leaves never meet. Love is not for cause and effect, destined to life and death.<br><br>\
             It grows in the wild in the stone, the head of the grave, so some people say it is \"to spend their way\". The flowers can't see leaves, leaves do not see the flowers, flowers and leaves two does not meet, by mistake, curse people generation after generation can not be together.<br><br>\
             Perennial herb. There is a spherical bulb in the ground, and it is wrapped in dark brown film scales. The narrow banded leaf, dark green, sprouting from the base, in the late summer, fall in Qiuchu. Flowering in late summer and early autumn, from about July to September. Stem length 30 - 60 cm, usually 4 - 6 single row umbrella form, at the top of the scape, petal oblanceolate, perianth red, white. Backward to carry out the curl, the edge of a crisped, perianth tube short; stamens and style are outstanding, flowers small, perimeter more than 6 cm in.",
            "Lycorisradiata",
            "Len:30",
            "Flower",
            "13800000000"
        );

    }
}