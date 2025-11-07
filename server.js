const express = require('express')


const api = express()

api.get('/api/stats/onlineUserStats',(req, res)=>{
    res.send('0');
})

api.get('/sessions', (req, res)=>{
    res.send([])
})

api.use((req, res, next)=>{
    console.log("UNKNOW URL! " + req.method + " | " + req.url);
    res.send("OK")
})


api.listen(60621,()=>{
    console.log("API service running...")
})