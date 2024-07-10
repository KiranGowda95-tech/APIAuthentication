const express=require('express');

const connectDB=require('./config/db')

const app=express();

//connected to database
connectDB()

app.use(express.json({extended:false}))

app.get('/',(req,res)=>{
    res.send('get end point')
})

app.use('/model',require('./src/db/mongoose'))

const PORT=process.env.PORT || 5000;

app.listen(PORT,console.log(`application is up and running on ${PORT}`))


const bcrypt=require('bcryptjs')

const Function=async()=>{

    const password='123pwd!'
    const hashedPassword=await bcrypt.hash(password,1)
    console.log(password)
    console.log(hashedPassword)

    const isMatch=await bcrypt.compare('123pwd',hashedPassword)
    console.log(isMatch)

}

Function()