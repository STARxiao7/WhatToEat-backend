var express = require('express');
var router = express.Router();
const axios = require('axios')
const {response} = require("express");

const randomNum = (max)=>Math.trunc(Math.random() * (max))

function handleRandomMenu(response, res) {
    const data = response.data
    const index = randomNum(data.length)
    const randomData = data[index]
    const randomMenu = randomData ? randomData.menuName : undefined
    res.send({
        randomMenu: randomMenu
    })
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    const { source , type} = req.query
    const user = req.user
    if (source === 'public'){
        if(!type){
            axios.get(`http://127.0.0.1:3020/getTableData?db=WhatToEat&table=menu`)
                .then((response)=>{
                    const data = response.data
                    const index = randomNum(data.length)
                    res.send({
                        randomMenu:data[index].menuName
                    })
                })
                .catch(e=>{
                    res.status(500)
                    res.send()
                })
        }else{
            axios.post('http://127.0.0.1:3020/getWhere',{
                db:'WhatToEat',
                table:'menu',
                where:{
                    type
                }
            }).then(response=>{
                handleRandomMenu(response, res);
            })
        }
    }else if (source === 'personal'){

        if (!type){
            axios.post(`http://127.0.0.1:3020/getWhere`,{
                db:'WhatToEat',
                table:'menu',
                where:{
                    username:user.username
                }
            }).then((response)=>{
                handleRandomMenu(response, res);
            }).catch(e=>{
                    res.status(500)
                    res.send()
                })
        }else{
            axios.post(`http://127.0.0.1:3020/getWhere`,{
                db:'WhatToEat',
                table:'menu',
                where:{
                    username:user.username,
                    type
                }
            }).then((response)=>{
                handleRandomMenu(response, res);
            }).catch(e=>{
                res.status(500)
                res.send()
            })
        }


    }else if (source === 'community'){

        if (!type){
            axios.post('http://127.0.0.1:3020/getWhere',{
                db:'WhatToEat',
                table:'users',
                where:{
                    username: user.username
                }
            }).then(response=>{
                const community = response.data[0].community
                axios.post(`http://127.0.0.1:3020/getWhere`,{
                    db:'WhatToEat',
                    table:'menu',
                    where:{
                        community
                    }
                }).then((response)=>{
                    handleRandomMenu(response,res)
                }).catch(e=>{
                    res.status(500)
                    res.send()
                })
            })
        }else{
            axios.post('http://127.0.0.1:3020/getWhere',{
                db:'WhatToEat',
                table:'users',
                where:{
                    username: user.username,
                }
            }).then(response=>{
                const community = response.data[0].community
                axios.post(`http://127.0.0.1:3020/getWhere`,{
                    db:'WhatToEat',
                    table:'menu',
                    where:{
                        community,
                        type
                    }
                }).then((response)=>{
                    handleRandomMenu(response,res)
                }).catch(e=>{
                    res.status(500)
                    res.send()
                })
            })
        }


    }else{
        res.status(500)
        res.send()
    }
});

module.exports = router;
