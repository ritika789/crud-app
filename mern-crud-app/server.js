const express = require('express');
const mongoose=require('mongoose');
const bodyParser=require('bodyParser');
const cors= require('cors');

const app=express();
const PORT=process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mern_crud_app' , {useNewUrlParser:true, useUnifieldTopology:true})
.then(()=>console.log ('MongoDBconnected'))
.catch(err=> console.error(err));

app.use('/api/items',require('./routes/items'));
app.listen(PORT,()=> console.log(`server is running on ${PORT}`));