var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const user = req.user
  console.log(req.ip)
  axios.post('http://127.0.0.1:3020/getWhere',{
    db:'WhatToEat',
    table:'users',
    where:{
      username:user.username,
    }
  }).then(response=>{
    const data = response.data[0]
    if (data) {
      if (data.isGuest) data.username = '游客'
      res.send(data)
    }else{
      res.status(401)
      res.send()
    }
    
  }).catch(e=>{
    console.log(e.message)
    res.status(500)
    res.send()
  })
});

module.exports = router;
