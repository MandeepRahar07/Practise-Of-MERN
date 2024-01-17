const mongoose = require("mongoose");

const UserShcema = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    organisation: {
        type: String,
        enum: ["apple", 'samsung', 'oneplus'],
        required: true,
        default: "apple"
    },
    role: {
        type: String,
        enum: ["student", 'lecturer'],
        default: "student"
    }
})

const UserModel = mongoose.model("user", UserShcema);

module.exports = {
    UserModel
}