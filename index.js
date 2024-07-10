const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send('get end point')
})

const PORT=process.env.PORT || 5000;

app.listen(PORT,console.log(`application is up and running on ${PORT}`))