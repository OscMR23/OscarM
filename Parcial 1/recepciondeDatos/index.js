const express = require('express');
 const app = express();
 const cors = require('cors')


app.use(cors({origin:'*'}));  //middleware de terceros

   // app.use((req,res,next)=>{  //middleware de aplciaicon
   //    console.log(new Date());
   //   next();
   // })

   app.use(express.json());   //Middleware Incorporado en


   app.get('/clientes/:id',cors(),(req,res)=>{
      console.log(req.params)
    res.json({mensaje:'Server Express contestando a peticion get'})
    
 })

 app.post('/clientes',(req,res)=>{
   console.log(req.query)
   res.json({mensaje:'Server Express contestando a peticion post'})
 })

 app.put('/clientes/:id',(req,res)=>{
   console.log(req.body)
   res.json({mensaje:'Server Express contestando a peticion put'})
})

app.listen(3001, ()=>{
   console.log('Escuchando Server Express puerto 3001')
})
 


