const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const {UserModel} = require('../models/user.models');
const { v4: uuidv4 } = require('uuid');
const GOOGLE_CLIENT_ID = '57429872163-kj1bjp1jekii9iouag7p8dtp3mfk4lao.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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';
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
 async function(accessToken, refreshToken, profile, cb) {
    let email = profile._json.email;
    let name = profile._json.name;
    
    console.log(profile);
   const user = new UserModel({
    name : name,
    email : email,
    password : uuidv4(),
   })

   await user.save();
      return cb(null, user);
  }
));

module.exports = passport;