const express = require('express')
const mongoose = require('mongoose')
const employeeRouter = require('./routes/employeeRoute')
const cors = require('cors')
const dotenv = require('dotenv')
const EmpSchema = require('./models/Employee')
dotenv.config()


const app = express()
app.use(
  cors({
    origin: '*',
  })
)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Connect to mongoose
const URI = process.env.MONGODB_URL
mongoose.connect(URI,{

    useNewUrlParser: true, 
    
    useUnifiedTopology: true 
    
    }, err=>{
 if(err) throw err;
 console.log('Connected to MongoDB')
})



app.get('/',(req,res)=>{
    res.json({message:'Welcome to my project please leave a comment'})
})
app.use(employeeRouter)
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('Server is running on port',PORT)
})





