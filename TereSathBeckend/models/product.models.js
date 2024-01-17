const mongoose = require("mongoose");

const productshcema = mongoose.Schema({
    "name" : {type : String, required : true},
    "imagelink" : {type : String, required : true},
    "price" : {type : Number, required : true},
    "stockavilable" : {type : Boolean, required : true},
    "comingsoon" : {type : Boolean , required : true},
    "category" : {type : String, required : true}
})

const ProductModel = mongoose.model("product", productshcema);
module.exports = {
    ProductModel
}