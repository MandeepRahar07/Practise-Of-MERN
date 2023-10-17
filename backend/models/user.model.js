const mongoose = require("mongoose");

const userShcema = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true}
})

const UserModel = mongoose.model("userdata", userShcema);

module.exports = {
    UserModel
}