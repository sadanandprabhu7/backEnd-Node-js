
const express=require('express')
const bodyParser=require('body-parser')

const app=express();

app.use(bodyParser.urlencoded({extended:false}))


app.use('/get-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><lebel>Poduct Name : </lebel><input type="text" name="title"><lebel>Poduct size : </lebel><input type="text" name="size"><button type="submit">submit</button></form>')
    
    
})

app.use('/product',(req,res,next)=>{
    console.log(req.body)
    //console.log('hello')
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    res.send('<h1>hello express</h1>')
    //res.send("{key1:value}")
    
})
app.listen(4000)