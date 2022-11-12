var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET users listing. */
router.post('/', function(req, res, next) {
  const {_id} = req.body
  
  axios.post('http://127.0.0.1:3020/deleteData',{
    db:'WhatToEat',
    table:'menu',
    _id
  }).then(()=>{
    res.send()
  }).catch(e=>{
    console.log(e.response.data)
    res.status(500)
    res.send()
  })
});

module.exports = router;
