const express = require("express");
 const app = express();
 const cors = require('cors')


 app.use(cors());
   app.get('/',(req,res)=>{
    res.send('Server Express contestando a peticion get')
    
 })

 app.post('/',(req,res)=>{
    res.send('Server Express contestando a peticion post')
 })

 app.listen(5000, ()=>{
    console.log('Escuchando Server Express puerto 5000')
 })
