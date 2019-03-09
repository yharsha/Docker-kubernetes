const express = require('express');

const app = express();

app.get('/',(req,res)=>{
  res.send('Node JS application deployed in docker Container.... bye there');
});

app.listen(8080,()=>{
  console.log('Listening on port 8080');
});
