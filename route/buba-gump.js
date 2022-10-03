const express = require('express');
const { route } = require('express/lib/application');

const router= express.Router();

router.get('/', (req,res)=>{
    res.send({message: "Hello there!"})
})

router.post('/ping', (req,res)=>{
    res.send({message: "pong"})
})

router.post('/pong', (req,res)=>{
    res.send({message: "ping"})
})

module.exports=router;