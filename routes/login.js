var express = require('express');
var router = express.Router();
const axios = require('axios')
const jwt = require('jsonwebtoken')
const {response} = require("express");

/* GET users listing. */
router.post('/', function(req, res, next) {
  const loginUser = req.body
  const secretKey = req.app.get('secretKey')

  axios.post('http://127.0.0.1:3020/getWhere',{
    db:'WhatToEat',
    table:'users',
    where:{
      username:loginUser.username,
      password:loginUser.password
    }
  }).then(response=>{
    if (response.data.length === 0){
      res.status(401)
      res.send()
    }else{
      const user = response.data[0]
      const tokenStr = jwt.sign({
        username:user.username,
        password: user.password
      },secretKey)
      res.send({
        ...user,
        jwtToken:tokenStr
      })
    }
  }).catch(e=>{
    res.status(500),
        res.send()
  })
});

module.exports = router;
