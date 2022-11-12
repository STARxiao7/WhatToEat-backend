var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const { keywords } = req.query

  if(keywords){
    axios.get('http://127.0.0.1:3020/getTable?db=WhatToEat&table=menu')
    .then(response=>{
      const {index} = response.data
      const reg = new RegExp(keywords)
      const typeList = []
      const typeObj = index.type
      const tempArr = Object.keys(typeObj)
      tempArr.forEach(item =>{
        if (reg.test(item)) typeList.push(item)
      })
      res.send(typeList)
    })
    .catch(e=>{
      console.log(e.message)
      res.status(500)
      res.send()
    })
  }else{
    res.send([])
  }
});

module.exports = router;
