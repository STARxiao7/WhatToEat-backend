var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const user = req.user

  axios.post('http://127.0.0.1:3020/getWhere',{
    db:'WhatToEat',
    table:'menu',
    where:{
      username:user.username
    }
  }).then(response=>{
    const data = response.data
    res.send(data)
  }).catch(e=>{
    console.log(e.message)
    res.status(500)
    res.send()
  })
});

module.exports = router;
