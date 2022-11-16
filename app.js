
const express=require('express')

const app=express();

app.use('/',(req,res,next)=>{
    console.log('this always run')
    next()
})

app.use('/getProduct',(req,res,next)=>{
    res.send('<h1>add product express</h1>')
    
    
})

app.use('/',(req,res,next)=>{
    res.send('<h1>hello express</h1>')
    //res.send("{key1:value}")
    
})
app.listen(4000)