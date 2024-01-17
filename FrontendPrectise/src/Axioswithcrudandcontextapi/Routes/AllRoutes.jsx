import React from 'react'
import {Route, Routes} from 'react-router-dom';
import NewProduct from '../Products/NewProduct';
import Productsdetails from '../Products/Productsdetails';
import AddProduct from '../CRUD/AddProduct';
import EditProduct from '../CRUD/EditProduct';
import Signup from '../../LoginSignup/Signup';
import Login from '../../LoginSignup/Login';
function AllRoutes() {

  return (
    <div>
        <div>
            <Routes>
                <Route path="/" element={<NewProduct/>}></Route>
                <Route path="/product/:id" element={<Productsdetails/>}></Route>
                <Route path="/addproduct" element={<AddProduct/>}></Route>
                <Route path="/editproduct/:id" element={<EditProduct/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </div>
    </div>
  )
}

export default AllRoutes