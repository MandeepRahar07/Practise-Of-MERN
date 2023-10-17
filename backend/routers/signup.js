// signup.js

const express = require('express');
const bcrypt = require ('bcrypt');
const router = express.Router();
const { UserModel } = require('../models/user.model'); 

router.post('/signup', (req, res) => {
  const {name, email, password} = req.body;

    bcrypt.hash(password, 4, async(err, hash)=>{
    if(err){
      res.send("something went wrong");
    }
    else{
      const data = await UserModel.create({
        name,
        password: hash,
        email
      })
      res.send(data);
    }
    })
  

  
   

 
});

module.exports = router;
