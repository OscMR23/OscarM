const express = require ("express");
const app = express();
const cors = require('cors')

app.use(cors({
    origin : "http://localhost:3000",
}
    
));

app.get("/",(req,res)=>{
    res.json({name : "Code Bless you", Suscribe: true});
})

app.listen(5000,() => console.log("Server is listening  on 5000"));