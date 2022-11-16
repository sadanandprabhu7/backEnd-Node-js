const fs=require('fs')

const requsetHandler =(req,res)=>{
    const url=req.url
    const method=req.method
    const body=[]
    if(url==='/')
    {
       
       fs.readFile("message.text",{encoding: "utf-8"},(err,data)=>{
          if(err){
             console.log(err)
          }
          console.log(data);
          //res.write('Content-Type','text/html')
          res.write('<html>')
          res.write('<head><title>Enter message</title></head>')
          res.write(`<body>${data}</body>`)
          res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>')
          res.write('</html>')
          return res.end();
       })
    
    }
    else if(url==='/message' && method==='POST')
    {
      
       
       req.on('data',(chunk)=>{
          console.log(chunk)
          body.push(chunk)
       })
      return req.on('end',()=>{
          const parseBody=Buffer.concat(body).toString();
          
         const message=parseBody.split('=')[1]
         //res.write(`<h2>${message}</h2>`)
         console.log(message);
         fs.writeFile('message.text',message,err=>{
          res.statusCode=302//for redirection
          res.setHeader('Location','/')
          return res.end()
         })
       })
       
    }
    else if(url=='/home')
    {
       res.write('<html>')
       res.write('<head><title> Welcome home</title></head>')
       res.write('<body><h1> Welcome home</h1></body>')
       res.write('</html>')
       return res.end();
    }
    else if(url=='/about')
    {
       res.write('<html>')
       res.write('<head><title>Welcome to About Us page</title></head>')
       res.write('<body><h1>Welcome to About Us page</h1></body>')
       res.write('</html>')
       return res.end();
    }
    else if(url=='/node')
    {
       res.write('<html>')
       res.write('<head><title>Welcome to my Node Js project</title></head>')
       res.write('<body><h1>Welcome to my Node Js project</h1></body>')
       res.write('</html>')
       return res.end();
    }
    
}

//module.exports=requsetHandler;

// module.exports={
//     handler:requsetHandler,
//     someText:"some hard code text"
// }.

// module.exports.handler=requsetHandler;
// module.exports.someText='some hard code text';
exports.handler=requsetHandler;
exports.someText='some hard code text';