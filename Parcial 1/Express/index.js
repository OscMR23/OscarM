const express = require('express');
 const app = express();
 const cors = require('cors')


//  app.use(cors({origin:'*'}));
   app.get('/',(req,res)=>{
    res.send('Server Express contestando a peticion get')
    
 })

 app.post('/',(req,res)=>{
    res.send('Server Express contestando a peticion post')
 })

 app.listen(3001, ()=>{
    console.log('Escuchando Server Express puerto 3001')
 })
