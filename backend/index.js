const express = require ("express");
const {connection} = require('./config/db')
const {ProductModel} = require('./models/product.model.js')
const {UserModel} = require ('./models/user.model')
 const app = express();
 app.use(express.json());
const singup = require ('./routers/signup')
const login = require ('./routers/login')
// ......signup 
// Import the signup router
const signupRouter = require('./routers/signup');

// Use the signup router for the '/signup' route
app.use('/', signupRouter);


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