const express = require ("express");
const Jwt = require("jsonwebtoken");
const {UserModel} = require("../models/user.models")

const authenticationMiddleware = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1]
    if(!token){
        res.send({msg : "login first"});
    }
    else{
        Jwt.verify(token,"mandeep", function(err,decoded){
            if(err){
                res.send({msg : "login frist"})
            }
            else{
                const {userID} = decoded;
                req.userID = userID;
                next();
            }
        } )
    }

}

const authorised = (permittedRoles)=>{
    return async (req,res,next)=>{
        const userID = req.userID;
        const user = await UserModel.findOne({_id : userID})
        console.log(user);
        const user_role = user.role
        if(permittedRoles.includes(user_role)){
            next();
        }
        else{
            res.send("Not authorised");
        }
    }
}


module.exports = {authenticationMiddleware,authorised};