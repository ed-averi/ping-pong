const express = require('express');
const { route } = require('express/lib/application');

const router= express.Router();
// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


router.get('/', async (req,res)=>{
    // await sleep(3000);
    res.send({message: "Hello there!"})
})

router.post('/ping', (req,res)=>{
    res.send({message: "pong"})
})

router.post('/pong', (req,res)=>{
    res.send({message: "ping"})
})

module.exports=router;