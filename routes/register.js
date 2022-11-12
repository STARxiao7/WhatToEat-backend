var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
const axios = require('axios')

/* GET users listing. */
router.post('/', function(req, res, next) {
  const { username, password, community } = req.body
  const userIP = req.ip
  const secretKey = req.app.get('secretKey')
  const randomNum = (max)=>Math.trunc(Math.random() * max) + 1
  const randomAvatar = randomNum(6)

  const userInfo = {
    username,
    password,
    community,
    avatar: randomAvatar,
    IP: userIP,
    isGuest: false
  }



  axios.post('http://127.0.0.1:3020/getWhere',{
    db:'WhatToEat',
    table:'users',
    where:{
      username:userInfo.username
    }
  }).then((response)=>{

    if (response.data.length !== 0) throw new Error('409')

  }).then(()=>{

    const tokenStr = jwt.sign({
      username:userInfo.username,
      password: userInfo.password
    },secretKey)

    axios.post('http://127.0.0.1:3020/addData',{
      db:'WhatToEat',
      table:'community',
      data:{
        community:userInfo.community
      }
    }).catch(e=>{
      res.status(500)
      res.send()
    })

    axios.post('http://127.0.0.1:3020/addData',{
      db:'WhatToEat',
      table:'users',
      data: userInfo
    }).then(()=>{
      res.send({
        ...userInfo,
        jwtToken:tokenStr
      })
    }).catch(e=>{
      console.log(e.message)
      res.status(500)
      res.send()
    })

  }).catch(e=>{
    if (e.message === '409') res.status(409)
    res.send()
  })


  })





module.exports = router;
