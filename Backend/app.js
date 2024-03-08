const express=require('express');
const mongoose = require("mongoose");
const cors=require('cors')
const dotenv=require('dotenv');
const bodyParser=require('body-parser');

dotenv.config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })

const app=express();
// app.use(bodyParser)
app.use(cors())
app.use(express.json());
const userRoutes=require('./routes/user');


app.get('/',(req,res)=>{
    res.json({message:'Hello World !'})
})

app.use(userRoutes);

app.listen(3000,()=>{
    console.log('Server is up and running on port 3000 !');
})