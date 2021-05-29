const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/mern-blog',{useUnifiedTopology:true,useNewUrlParser:true})
    .then(()=>console.log('Database Connected'))
    .catch(err=>console.log(err))

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(5000,()=>console.log('Server Started'))