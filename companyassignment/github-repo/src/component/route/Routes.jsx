import React from 'react'
import {Routes,Route} from 'react-router-dom'
import GithubProfile from '../GithubProfile'
import RepoDetails from '../ProductDetails'
function Routeer() {
  return (
    <div>Routes
   <Routes>
    <Route path='/' element={<GithubProfile/>}>Home</Route>
    <Route path='/repo/:id' element={<RepoDetails/>}>Product Details</Route>
   </Routes>
        
    </div>
  )
}

export default Routeer;