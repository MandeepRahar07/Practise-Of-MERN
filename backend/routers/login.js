const express = require("express");
const bcrypt = require("bcrypt");
const {UserModel} = require("../models/user.model");
const router =  express.Router();
const jwt = require('jsonwebtoken');



router.post('/login', async(req,res)=>{
    const {email, password} = req.body;
    try{
        const isuser = await UserModel.findOne({email : email});
        if(!isuser){
            res.send({ msg : "user not found, singup first"});
        }
        else{
            const storepassword = isuser.password;
            bcrypt.compare(password, storepassword, function(err, result){
                if(err){
                    res.send({massage : `password doesn't match`})
                }
               if(result){
                const token = jwt.sign({userId : isuser._id}, "mandeep")
                res.send({ msg :"login successfull", token : token} );
               }
            })
        }
    }catch(err){
        res.send(err);
        console.log("errr");
    }
})

module.exports = router;