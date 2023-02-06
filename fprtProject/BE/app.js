const express=require('express');

const { signUp,login,logout,blog,addBlog }=require('./Controllers/authControllers')

const {mos}=require('./mongoose')

let multer = require('multer')

let upload = multer({storage:multer.memoryStorage()})

let cookieParser = require('cookie-parser');

//let {empModel}=require('./schema')
const app=express();
const cors=require('cors')


// const dotenv = require('dotenv')
// dotenv.config()




const { urlencoded } = require('express');

app.listen(8000);
app.get('/', (req,res)=>{
    console.log("Server started successfully");
    res.send("Server started successfully!!");
})

app.use(urlencoded())
app.use(express.json())
app.use(cors())
app.use(cookieParser())

mos()

app.post('/login', login);

  app.post('/signup',signUp);

app.get('/logout',logout);

app.get('/Blog',blog);

app.post('/addBlog',addBlog)

// app.put('/update/:empID',Update);

// app.delete('/delete',Delete);
  
