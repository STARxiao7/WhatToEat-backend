var express = require('express');
var router = express.Router();
const axios = require('axios')
const { v1: uuidv1 } = require('uuid');
const jwt = require('jsonwebtoken')



/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("POST:")
  console.log(req.body);
  const secretKey = req.app.get('secretKey')
  const randomNum = (max)=>Math.trunc(Math.random() * max) + 1
  const randomUserName = uuidv1()
  const guestUser = {
    _id:randomUserName,
    username:randomUserName,
    password:'admin',
    avatar:`${randomNum(6)}`,
    isGuest:true,
    IP:`${req.ip}`
  }
  const tokenStr = jwt.sign({
    username:guestUser.username,
    password: guestUser.password
  },secretKey)
  axios.post('http://127.0.0.1:3020/addData',{
    db:'WhatToEat',
    table:'users',
    data:guestUser
  }).then(()=>{
    res.send({
      jwtToken:tokenStr,
      username:'游客',
      avatar:guestUser.avatar,
      isGuest:guestUser.isGuest
    })
  }).catch(e=>{
    console.log(e.message)
    res.status(500)
  })

});

module.exports = router;
