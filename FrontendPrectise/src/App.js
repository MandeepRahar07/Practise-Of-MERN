import logo from './logo.svg';
import './App.css';
import NewProduct from './Axioswithcrudandcontextapi/Products/NewProduct';
import Navbar from './Axioswithcrudandcontextapi/Navbar/Navbar';
import AllRoutes from './Axioswithcrudandcontextapi/Routes/AllRoutes';
import Multer from './multer/Multer';
import Login from './LoginSignup/Login';


function App() {
  return (
    <div className="App">
       <h1>hwloo PP</h1>
       <Navbar></Navbar>
   
{/* <Multer></Multer>
       {/* <NewProduct></NewProduct> */}
       <AllRoutes></AllRoutes> 
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
