import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Discription from '../Discription';
import Userconnect from '../userdetails';

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogdetails" element={<Discription />} />
        <Route path='/contact' element={<Userconnect></Userconnect>}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
