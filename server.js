let http =require('http');

let server= http.createServer((request,response)=>{
 
  console.log(request);
});
server.listen(3000);

