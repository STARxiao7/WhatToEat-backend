var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET users listing. */
router.post('/', function(req, res, next) {
  const { menuName , community , type} = req.body
  const date = Date.now()
  const user = req.user
  axios.post('http://127.0.0.1:3020/addData',{
    db:'WhatToEat',
    table:'menu',
    data:{
      menuName,
      type,
      username:user.username,
      community,
      date
    }
  }).then(()=>{
    res.send()
  }).catch(e=>{
    console.log(e.message)
    res.status(500)
    res.send()
  })
});

module.exports = router;
