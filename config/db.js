const mongoose=require('mongoose');
const config=require('config');
const db=config.get('mongoURI');

console.log('entering to db file')

const connectDB=async()=>{
    try {
        console.log('entering to db')
        await mongoose.connect(db)
        console.log('entering to after connection db')
    } catch (error) {
        process.exit(1)
    }
}

module.exports=connectDB