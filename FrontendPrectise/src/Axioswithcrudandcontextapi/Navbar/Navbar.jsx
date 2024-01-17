import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>

        <Link to="/">All Products</Link>
        
         <Link to="addproduct"> Add Product</Link>
      <Link to='/signup'>Signup</Link>
      <Link to ='/login'>Login</Link>
    </div>
  )
}

export default Navbar