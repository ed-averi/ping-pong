const express = require('express');

const router = express.Router();

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));



router.get('/3000', async (req,res)=>{
    // await sleep(3000);
    res.send({message: "Hello there!"})
})

router.post('/', async (req,res)=>{
    await sleep(1000);
    res.send({message: "Hello delayed console!"})
})

router.post('/3000', async (req,res)=>{
    await sleep(3000);
    res.send({message: "Hello delayed console 3000!"})
})

module.exports= router;
