const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: { type: String, required: true },
    imagelink: { type: String, required: true },
    price: { type: Number, required: true },
    stockavailable: { type: Boolean, required: true },
    comingsoon: { type: Boolean, required: true },
    category: { type: String, required: true },
    role: {
        type: String,
        enum: ["owner", 'worker'],
        default: "worker"
    },
    organisation: {
        type: String,
        enum: ["masai", 'prepleaf', 'google'],
        required: true,
        default: "google"
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const ProductModel = mongoose.model("product", ProductSchema);
module.exports = {
    ProductModel
};
