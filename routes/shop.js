const express =require('express')

const router=express.Router();



router.get('/',(req,res,next)=>{
    res.send('<h1>hello express</h1>')
    //res.send("{key1:value}")
    
})

module.exports=router;