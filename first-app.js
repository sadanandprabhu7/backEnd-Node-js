 const http =require('http')

 const server = http.createServer((req, res)=>{
   const url=req.url
   if(url=='/home')
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
   

 })

 server.listen(4000)