const express = require('express');

const router = express.Router();
const {UserModel} = require('../models/user.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post("/login", async(req,res)=>{
    const {email, password} = req.body;
   const isUser = await UserModel.findOne({email : email})

   if(isUser){
    const storepassword = isUser.password;
    bcrypt.compare(password, storepassword, function(err, result) {
        if(err){
            res.send({msg : err})
        }
    
    if(result){
        const token = jwt.sign({userID : isUser._id}, "mandeep",{
            expiresIn : '50m',
        })
        res.send({ msg :"login successfull", token : token} );
       }
    });
   }
   

})

module.exports = router;