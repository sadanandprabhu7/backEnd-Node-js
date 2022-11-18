const express = require('express')

const bodyParser=require('body-parser')

const fs=require('fs');

const app =express();

app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res,next)=>{

    fs.readFile('username.text',(err,data)=>{
        if(err){
            console.log(err)
            data='No chat exist'
        }

        res.send(`${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST">
        <input id=",message" type="text" name="message" >
        <input id="username" type="hidden" name="username" >
        <button type="submit">send</button></form>`)
    })
   
    
});



app.post('/',(req,res,next)=>{
    fs.writeFile('username.text', `${req.body.username}: ${req.body.message}`,{flag:'a'},(err)=>{
        err ? console.log(err) : res.redirect("/")
    });

});

app.get('/login',(req,res,next)=>{
    res.send(`<form onsubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/" method="POST">
    <input id="username" type="text" name="title" >
    <button type="submit">submit</button></form>`)     
    })
 
app.listen(3000)