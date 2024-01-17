const express = require("express");
const router = express.Router();
const {  UserModel} = require('../models/user.models')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')

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
  