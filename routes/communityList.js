var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const {keywords} = req.query
    if(keywords === ''){
        res.send([])
    }
  axios.get('http://127.0.0.1:3020/getTableData?db=WhatToEat&table=community')
      .then(response=>{
        const dataArr = response.data
        const reg = new RegExp(keywords)
        let tempArr = []
        dataArr.forEach(item=>{
          if ( reg.test(item.community) ) tempArr.push(item.community)
        })
        const tempSet = new Set(tempArr)
        tempArr = [...tempSet]
        const communityList = tempArr.slice(0,4)
        res.send(communityList)
      })
      .catch(e=>{
        res.status(500)
        res.send()
      })
});

module.exports = router;
