const express = require ("express");
const {connection} = require('./config/db')
const {ProductModel} = require('./models/product.model.js')
const {UserModel} = require ('./models/user.model')
 const app = express();
 app.use(express.json());

// ......signup 
// Import the signup router
const signupRouter = require('./routers/signup');
const loginRouter = require('./routers/login')
// Use the signup router for the '/signup' route

const authentication = (req, res, next)=>{
   const token = req.headers.authorization?.split(" ")[1];
   if(!token){
    res.send({msg : "log in first"});
   }
   else{
      res.send({ msg : "login successfull"});
   }
}

app.use('/', signupRouter);
app.use('/', loginRouter);
 app.get("/", (req,res)=>{
    res.send("heloo dear home")
 })

 



 app.listen(8080, async(req,res)=>{
    try{
        await connection();

    }catch(err){
        console.log(err);
    }
    console.log("server 8080 is running");
 })