const axios = require("axios");
const communityList = [
    {
        "community": "东南科技大学"
    },
    {
        "community": "东北艺术大学"
    },
    {
        "community": "西北农业大学"
    },
    {
        "community": "中南大学"
    },
    {
        "community": "中国艺术大学"
    },
    {
        "community": "西南艺术大学"
    },
    {
        "community": "东南科技大学"
    },
    {
        "community": "中国传媒大学"
    },
    {
        "community": "东南经贸大学"
    },
    {
        "community": "南开大学"
    },
    {
        "community": "华南农业大学"
    },
    {
        "community": "北京理工大学"
    },
    {
        "community": "中国政法大学"
    },
    {
        "community": "东北农业大学"
    },
    {
        "community": "广东经贸大学"
    },
    {
        "community": "西北农林大学"
    },
    {
        "community": "中国农业大学"
    },
    {
        "community": "东南大学"
    },
    {
        "community": "西南体育大学"
    },
    {
        "community": "西南技术大学"
    },
    {
        "community": "南理工大学"
    },
    {
        "community": "东北理工大学"
    },
    {
        "community": "四川技术大学"
    },
    {
        "community": "中国理工大学"
    },
    {
        "community": "四川大学"
    },
    {
        "community": "东南技术大学"
    },
    {
        "community": "西北体育大学"
    },
    {
        "community": "东北经贸大学"
    },
    {
        "community": "西南体育大学"
    },
    {
        "community": "中国体育大学"
    },
    {
        "community": "南体育大学"
    },
    {
        "community": "西南技术大学"
    },
    {
        "community": "东北经贸大学"
    },
    {
        "community": "西南经贸大学"
    },
    {
        "community": "东经贸大学"
    },
    {
        "community": "南艺术大学"
    },
    {
        "community": "东南技术大学"
    },
    {
        "community": "西南农业大学"
    },
    {
        "community": "中国经贸大学"
    },
    {
        "community": "中国技术大学"
    },
    {
        "community": "西北理工大学"
    },
    {
        "community": "西北农业大学"
    },
    {
        "community": "东北科技大学"
    },
    {
        "community": "东北技术大学"
    },
    {
        "community": "西北体育大学"
    },
    {
        "community": "哈尔滨工业"
    },
    {
        "community": "黑龙江技术学院"
    },
    {
        "community": "湖南大学"
    },
    {
        "community": "东南艺术大学"
    },
    {
        "community": "东艺术大学"
    },
    {
        "community": "西经贸大学"
    },
    {
        "community": "武汉大学"
    },
    {
        "community": "北理工大学"
    },
    {
        "community": "西北农业大学"
    },
    {
        "community": "东南农业大学"
    },
    {
        "community": "西北技术大学"
    },
    {
        "community": "北技术大学"
    },
    {
        "community": "东南农业大学"
    },
    {
        "community": "东技术大学"
    },
    {
        "community": "北农业大学"
    },
    {
        "community": "北体育大学"
    },
    {
        "community": "中国理工大学"
    },
    {
        "community": "中国经贸大学"
    },
    {
        "community": "东北农业大学"
    },
    {
        "community": "中国理工大学"
    },
    {
        "community": "北艺术大学"
    },
    {
        "community": "东北艺术大学"
    },
    {
        "community": "南艺术大学"
    },
    {
        "community": "西北技术大学"
    },
    {
        "community": "西大学"
    },
    {
        "community": "东北科技大学"
    },
    {
        "community": "南经贸大学"
    },
    {
        "community": "东经贸大学"
    },
    {
        "community": "中国技术大学"
    },
    {
        "community": "南农业大学"
    },
    {
        "community": "西艺术大学"
    },
    {
        "community": "南经贸大学"
    },
    {
        "community": "北经贸大学"
    },
    {
        "community": "东北艺术大学"
    },
    {
        "community": "南体育大学"
    },
    {
        "community": "东大学"
    },
    {
        "community": "东北科技大学"
    },
    {
        "community": "西北艺术大学"
    },
    {
        "community": "西安交通大学"
    },
    {
        "community": "上海大学"
    },
    {
        "community": "东北科技大学"
    },
    {
        "community": "西北体育大学"
    },
    {
        "community": "浙江大学"
    },
    {
        "community": "顺德职业技术学院"
    },
    {
        "community": "佛山大学"
    },
    {
        "community": "家里蹲大学"
    },
    {
        "community": "麻省理工大学"
    },
    {
        "community": "哈佛大学"
    },
    {
        "community": "华东科技大学"
    },
    {
        "community": "东北经贸大学"
    },
    {
        "community": "电子科技大学"
    },
    {
        "community": "中国科技大学"
    },
    {
        "community": "东北农业大学"
    },
    {
        "community": "东北科技大学"
    },
    {
        "community": "西北艺术大学"
    },
    {
        "community": "广州大学"
    },
    {
        "community": "广州大学-桂花岗校区"
    },
    {
        "community": "广州大学-大学城校区"
    },
    {
        "community": "吉林大学"
    },
    {
        "community": "吉林大学-南湖校区"
    },
    {
        "community": "吉林大学-南区"
    },
    {
        "community": "吉林大学-南岭校区"
    },
    {
        "community": "吉林大学-朝阳校区"
    },
    {
        "community": "吉林大学-和平校区"
    },
    {
        "community": "华南师范大学"
    },
    {
        "community": "华南理工大学"
    },
    {
        "community": "北京大学"
    },
    {
        "community": "清华大学"
    },
    {
        "community": "广州大学城"
    },
    {
        "community": "广州大学城北亭"
    },
];
const menuList = [
    {
        "menuName": "蛋炒饭",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "火锅",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "汉堡",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "煎饼果子",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "牛排",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "西餐",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "韩餐",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "烤肉",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "打边炉",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "烤肉拌饭",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "水饺",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "Taco",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "寿司",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "烤鸭",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "拉面",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "泡面",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "热干面",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "炸酱面",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "重庆小面",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "海底捞",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "螺狮粉",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "肉夹馍",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "粤菜",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "茶餐厅",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "披萨",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "炸鸡",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "烧烤",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "炒饭",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "部队火锅",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "黄焖鸡米饭",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "卤肉饭",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "珍珠奶茶",
        "type":"奶茶",
        "username": "admin"
    },
    {
        "menuName": "喜茶",
        "type":"奶茶",
        "username": "admin"
    },
    {
        "menuName": "茶百道",
        "type":"奶茶",
        "username": "admin"
    },
    {
        "menuName": "奈雪的茶",
        "type":"奶茶",
        "username": "admin"
    },
    {
        "menuName": "蜜雪冰城",
        "type":"奶茶",
        "username": "admin"
    },
    {
        "menuName": "柠檬茶",
        "type":"奶茶",
        "username": "admin"
    },
    {
        "menuName": "蛋炒饭",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "火锅",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "汉堡",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "煎饼果子",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "牛排",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "西餐",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "韩餐",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "烤肉",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "打边炉",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "烤肉拌饭",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "水饺",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "Taco",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "寿司",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "烤鸭",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "拉面",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "泡面",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "热干面",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "炸酱面",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "重庆小面",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "海底捞",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "螺狮粉",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "肉夹馍",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "粤菜",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "茶餐厅",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "披萨",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "炸鸡",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "烧烤",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "炒饭",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "部队火锅",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "黄焖鸡米饭",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "卤肉饭",
        "type":"主食",
        "username": "admin"
    },
    {
        "menuName": "冰美式",
        "type":"咖啡",
        "username": "admin"
    },
    {
        "menuName": "卡布奇诺",
        "type":"咖啡",
        "username": "admin"
    },
    {
        "menuName": "生椰拿铁",
        "type":"咖啡",
        "username": "admin"
    },
    {
        "menuName": "拿铁",
        "type":"咖啡",
        "username": "admin"
    },
    {
        "menuName": "王老吉",
        "type":"饮品",
        "username": "admin"
    },
    {
        "menuName": "橙汁",
        "type":"饮品",
        "username": "admin"
    },
    {
        "menuName": "维他奶",
        "type":"饮品",
        "username": "admin"
    },
    {
        "menuName": "冰红茶",
        "type":"饮品",
        "username": "admin"
    },
    {
        "menuName": "可乐",
        "type":"饮品",
        "username": "admin"
    },
    {
        "menuName": "柠檬茶",
        "type":"饮品",
        "username": "admin"
    },
    {
        "menuName": "雪碧",
        "type":"饮品",
        "username": "admin"
    },
    {
        "menuName": "鱼蛋",
        "type":"小吃",
        "username": "admin"
    },
    {
        "menuName": "烤冷面",
        "type":"小吃",
        "username": "admin"
    },
    {
        "menuName": "煎饼果子",
        "type":"小吃",
        "username": "admin"
    },
    {
        "menuName": "手抓饼",
        "type":"小吃",
        "username": "admin"
    },
    {
        "menuName": "麦辣鸡翅",
        "type":"小吃",
        "username": "admin"
    },
    {
        "menuName": "薯条",
        "type":"小吃",
        "username": "admin"
    },
    {
        "menuName": "苹果",
        "type":"水果",
        "username": "admin"
    },
    {
        "menuName": "西瓜",
        "type":"水果",
        "username": "admin"
    },
    {
        "menuName": "橘子",
        "type":"水果",
        "username": "admin"
    },
    {
        "menuName": "梨子",
        "type":"水果",
        "username": "admin"
    },
    {
        "menuName": "桃子",
        "type":"水果",
        "username": "admin"
    },
    {
        "menuName": "车厘子",
        "type":"水果",
        "username": "admin"
    },
    {
        "menuName": "葡萄",
        "type":"水果",
        "username": "admin"
    },
    {
        "menuName": "香蕉",
        "type":"水果",
        "username": "admin"
    },
    {
        "menuName": "曲奇饼",
        "type":"饼干",
        "username": "admin"
    },
    {
        "menuName": "趣多多",
        "type":"饼干",
        "username": "admin"
    },
    {
        "menuName": "旺旺雪饼",
        "type":"饼干",
        "username": "admin"
    },
    {
        "menuName": "冰淇淋",
        "type":"甜品",
        "username": "admin"
    },
    {
        "menuName": "双皮奶",
        "type":"甜品",
        "username": "admin"
    },
    {
        "menuName": "姜撞奶",
        "type":"甜品",
        "username": "admin"
    },
    {
        "menuName": "旺旺碎冰冰",
        "type":"甜品",
        "username": "admin"
    },
    {
        "menuName": "面包",
        "type":"糕点",
        "username": "admin"
    },
    {
        "menuName": "马拉糕",
        "type":"糕点",
        "username": "admin"
    }
];
axios.post('http://127.0.0.1:3020/dbNormalize',{
    dbName: "WhatToEat"
}).then(()=>{
    axios.post('http://127.0.0.1:3020/createTable',{
        "db": "WhatToEat",
        "tableName": "users",
        "format": [
            "username",
            "password",
            "community",
            "avatar",
            "avatarUrl",
            "isGuest",
            "IP",
            "status"
        ]
    }).then(()=>{
        axios.post('http://127.0.0.1:3020/createTable',{
            "db": "WhatToEat",
            "tableName": "menu",
            "format": [
                "menuName",
                "type",
                "username",
                "community",
                "date"
            ]
        }).then(()=>{
            axios.post('http://127.0.0.1:3020/createTable',{
                "db": "WhatToEat",
                "tableName": "community",
                "format": [
                    "community"
                ]
            }).then(()=>{
                axios.post('http://127.0.0.1:3020/addData',{
                    db:'WhatToEat',
                    table:'community',
                    data: communityList
                }).then(()=>{
                    axios.post('http://127.0.0.1:3020/addData',{
                        db:'WhatToEat',
                        table:'menu',
                        data: menuList
                    })
                }).catch(e=>{
                    console.log(e.message)
                })
            })
        })
    })
}).catch(e=>{
    console.log(e.message)
})
