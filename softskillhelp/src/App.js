
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import { Box } from '@chakra-ui/react';

import AllRoutes from './components/Routes/Routes';
import Logi from './components/userdetails';
import Userconnect from './components/userdetails';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AllRoutes></AllRoutes>
     {/* <About></About> */}
     <Box mt="100%">
     {/* <Logi></Logi> */}
  
     </Box>
    </div>
  );
}

export default App;
