const express = require("express")
const bcrypt = require("bcrypt");
const {UserModel} = require('../models/user.models');
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post('/login', async(req,res)=>{
    const {email, password} = req.body;

    const isuser = await UserModel.findOne({email});
    if(isuser){
        const storepassword = isuser.password;
        bcrypt.compare(password,storepassword , async(err, result)=>{
            if(err){
                res.send({msg : err});
            }
        if(result){
            const token = jwt.sign({userid : isuser._id}, "mandeep",{
                expiresIn : "2m"
            })
            res.send(token);

        }
        })
    }

})