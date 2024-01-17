const { ProductModel } = require('../models/product.models');
const express = require("express");
const router = express.Router();
const {authenticationMiddleware,authorised} = require("../routers/authentication");

// router.use(authenticationMiddleware);
router.get('/products',authenticationMiddleware,authorised(["student"]), async (req, res) => {
    const{name,category,_sort , _order,page,limit} = req.query;
    try {
    let query = {};
    if(name){
        query.name={$regex:name}
    }
    if(category){
        query.category = category
    }
    
  let sorting = {};
  if(_sort){
    if(_order == 'asc' || _order == "desc"){
        sorting[_sort] = _order === "asc" ? 1 : -1;
    }
  }

 const limitofpage = parseFloat(limit);
 const perpageitem = (parseInt(page * limitofpage));
        const data = await ProductModel.find(query).sort(sorting);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.send({ msg: "Something went wrong" });
    }
});


router.post('/products/add', async (req, res) => {
    const { name, imagelink, stockavilable, comingsoon, category, price } = req.body;
    try {
        const data = await ProductModel.create({
            name, imagelink, stockavilable, comingsoon, category, price
        });
        res.send({ msg: "Data added successfully", data });
    } catch (err) {
        console.log(err);
        res.send({ msg: "Data added unsuccessfully" });
    }
});

router.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await ProductModel.findByIdAndDelete({ _id: id });
        if (data) {
            res.send({ msg: "Data deleted successfully" });
        } else {
            res.send({ msg: "Data not found" });
        }
    } catch (err) {
        console.log(err);
        res.send({ msg: "Something went wrong" });
    }
});



router.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, imagelink, stockavilable, comingsoon, category, price } = req.body;
    try {
        const data = await ProductModel.findByIdAndUpdate(
            id,
            {
                name,
                imagelink,
                stockavilable,
                comingsoon,
                category,
                price
            },
            { new: true }
        );
        if (data) {
            res.send({ msg: "Data updated successfully", data });
        } else {
            res.send({ msg: "Data not found" });
        }
    } catch (err) {
        console.log(err);
        res.send({ msg: "Something went wrong" });
    }
});




module.exports = router;
