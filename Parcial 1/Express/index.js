const express = require("express");
 const app = express();

 app.get('/',(req,res)=>{
    res.send('Server Express contestando a peticion get')
 })

 app.post('/',(req,res)=>{
    res.send('Server Express contestando a peticion post')
 })

 app.listen(3000, ()=>{
    console.log('Escuchando Server Express puerto 3000')
 })
