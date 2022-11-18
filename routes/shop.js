const express =require('express')

const path=require('path')

const rootDir=require('../util/path')

const router=express.Router();



router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'))
    //res.send("{key1:value}")
    
})

router.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'))
    //res.send("{key1:value}")
   // res.redirect('/');
    
})
router.post('/resp',(req,res,next)=>{
    console.log(req.body.name)
    console.log(req.body.email)
     res.redirect('/success');
})
router.get('/success',(req,res,next)=>{

    res.send('<h1>Form successfuly filled</h1>')

})


module.exports=router;