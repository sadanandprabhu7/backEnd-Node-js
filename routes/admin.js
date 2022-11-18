const express =require('express')

const path=require('path')

const rootDir=require('../util/path')

const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
    //res.send('<form action="/admin/get-product" method="POST"><lebel>Poduct Name : </lebel><input type="text" name="title"><lebel>Poduct size : </lebel><input type="text" name="size"><button type="submit">submit</button></form>') 
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body)

    res.redirect('/')
})

module.exports=router; ///getting from somewhere in our file//which is importer to router here which is here exporting to router