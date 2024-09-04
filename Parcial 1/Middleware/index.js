const express = require('express');
 const app = express();
 const cors = require('cors')


app.use(cors({origin:'*'}));  //middleware de terceros

app.use((req,res,next)=>{  //middleware de aplciaicon
   console.log(new Date());
  next();
})

app.use(express.json());   //Middleware Incorporado en


   app.get('/',cors(),(req,res)=>{
    res.send('Server Express contestando a peticion get')
    next(error);
 })

 app.post('/',(req,res)=>{
    res.send('Server Express contestando a peticion post')
 })

 app.listen(3001, ()=>{
    console.log('Escuchando Server Express puerto 3001')
 })

 app.use(function(err,req,res,next){              //Middle de manejo de errores
   res.status(500).send('Algo anda mal')
 })
