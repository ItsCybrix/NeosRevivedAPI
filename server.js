const express = require('express')
const bodyParser = require('body-parser')

const api = express()

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());


api.get('/api/stats/onlineUserStats',(req, res)=>{
    res.send('0');
})

api.get('/api/sessions', (req, res)=>{
    res.send([])
})

api.post('/api/stats/instanceOnline/:id',(req, res)=>{
    console.log(req.body)
})

api.use((req, res, next)=>{
    console.log("UNKNOW URL! " + req.method + " | " + req.url);
    res.send("OK")
})


api.listen(60621,()=>{
    console.log("API service running...")
})