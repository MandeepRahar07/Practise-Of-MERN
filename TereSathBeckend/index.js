const express = require ("express");
const passport = require('./routers/passport.js')
const {connection} = require('./config/db')
const cors = require('cors');
const multer = require('multer')
// const {ProductModel} = require('./models/product.model.js')
const {UserModel} = require ('./models/user.models')
const {ProductModel} = require('./models/product.models')
 const app = express();
 app.use(express.json());
 app.use(cors());
// ......signup 
// // Import the signup router
const signupRouter = require('./routers/signup');
const loginRouter = require('./routers/login')
const productRouter = require('./routers/crud')
// Use the signup router for the '/signup' route

const storage = multer.diskStorage({
    destination: function(req,file, cb){
        return cb(null,"./public/images")
    },
    filename: function(req,file,cb){
       return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage})
app.post('/upload', upload.single('file') ,(req,res)=>{
console.log(req.body);
console.log(req.file);
})


app.use('/', signupRouter);
app.use('/', loginRouter);
// app.use('/',authenticationMiddleware);
app.use('/', productRouter);
 app.get("/", (req,res)=>{
    res.send("heloo dear home")
 })


 ////////////////////////////////////////////////////////////////////
 /////pASSPORT GOOGLE AUTH////////////
 app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  function(req, res) {
    console.log(req.user);
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  app.get('/api/userProfile', (req, res) => {
    if (req.isAuthenticated()) {
      res.json({
        name: req.user.name,
        email: req.user.email
      });
    } else {
      res.status(401).json({ error: 'Not authenticated' });
    }
  });

 app.listen(8080, async(req,res)=>{
    try{
        await connection();

    }catch(err){
        console.log(err);
    }
    console.log("server 8080 is running");
 })
