const express = require('express')
//require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const connectDB=require('../config/db')

const app = express()
const port = process.env.PORT || 3000

connectDB()
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt=require('jsonwebtoken')

const myFunction = async () => {

    const token=jwt.sign({_id:'hello123'},'thisismysignin');
    console.log(token)

    const data=jwt.verify(token,'thisismysignin')
    console.log(data)

}

myFunction()