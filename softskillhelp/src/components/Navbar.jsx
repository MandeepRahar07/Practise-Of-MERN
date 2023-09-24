import React from 'react';
import { Link as Routerlink } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Spacer,
 
} from '@chakra-ui/react';


function Navbar() {


    return (
      <Box bg="teal.500" p={4}>
        <Flex alignItems="center" gap="10px">
          <Heading size="md" color="white">
            Nort Soft Help
          </Heading>
          <Spacer />
          <Routerlink to="/" color="white" mr={4}>
            Home
          </Routerlink>

          <Routerlink to="/about" color="white" mr={4}>
            About
          </Routerlink>
          
          <Routerlink to="/contact" color="white" mr={4}>
            Contact
          </Routerlink>
        </Flex>
      </Box>
    );
  }
  
  export default Navbar;
  