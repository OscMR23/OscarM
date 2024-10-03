const express = require('express');
 const cors = require('cors')
 const multer  = require('multer')

 const app = express();
 const upload = multer()

 const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

 


app.use(cors({origin:'*'}));  //middleware de terceros

   // app.use((req,res,next)=>{  //middleware de aplciaicon
   //    console.log(new Date());
   //   next();
   // })

   app.use(express.json()); //Middleware 
   app.use(express.json()); //Middleware 
   app.use(express.text()); //Middleware 
   app.use(express.urlencoded({extended:true}));  //Middleware 
   app.use(upload.none());
   app.use(bodyParser.xml());
 



 app.post('/clientes',(req,res)=>{
   console.log(req.body)
   res.json({mensaje:'Server Express contestando a peticion post'})
 })

app.listen(3001, ()=>{
   console.log('Escuchando Server Express puerto 3001')
})
 


