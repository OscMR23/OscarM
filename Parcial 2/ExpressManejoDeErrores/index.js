const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
// app.use(cors({origin:"*"}))
 
app.get('/',(req,res)=>{
    if (tru){
        res.json({mensaje: 'server express contestando a petición get'})
    }else{
        res.json({mensaje: 'server express contestando a petición get'})
        next(err);
    }
})
 
//función manejadora de errores de express
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500)
    res.json({error:err.message});
});
 
// app.post('/',(req,res)=>{
//     res.send('server express contestando a petición post')
// })
 
app.listen(3000,()=>{
    console.log('Server Express escuchando desde el puerto 3000')
})