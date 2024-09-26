const express = require('express');
 const app = express();
 const cors = require('cors')
 const path = require('path')


 app.use(cors());

   app.get('/sendFile',(req,res)=>{
      let archivo = path.join(__dirname,'/imagenes/monito2.jpg')
   res.sendFile(archivo);
    
 })
 app.get('/download',(req,res)=>{
   let archivo = path.join(__dirname,'/imagenes/monito2.jpg')
   res.download(archivo)
   
})
app.get('/attachment',(req,res)=>{
   let archivo = path.join(__dirname,'/imagenes/monito2.jpg')
  res.attachment(archivo)
  res.send();
})

 

 app.listen(3001, ()=>{
    console.log('Escuchando Server Express puerto 3001')
 })
