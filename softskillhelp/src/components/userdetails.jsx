import { Box, Heading, FormControl, Input, Button , Flex } from "@chakra-ui/react";
// import axios from 'axios';
import React, { useState } from 'react';

const Logi = () => {

  const [data, setData] = useState({
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    //   const response = await axios.post('http://localhost:8080/detail', data);
    //   console.log(response);

    //   // Update data if needed
    //   setData({ ...data, email: '', phone: '' });

    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Box>
      <Heading as="h1">Details to contact with us</Heading>
      <form onSubmit={handleSubmit}>
        <Flex >
        <FormControl style={{ marginRight: '0' }}>
          <Input
            type="text"
            width={{ base: '100%', md: '30rem' }}
            height="4rem"
            placeholder="Email "
            sx={{ '::placeholder': { fontSize: 'xl' } }}
            color="blue.500"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </FormControl>


        <FormControl style={{ marginRight: '0' }}>
          <Input
            type="Phone no"
            width={{ base: '100%', md: '30rem' }}
            height="4rem"
            placeholder="Contact no."
            sx={{ '::placeholder': { fontSize: 'xl' } }}
            color="blue.500"
            name="password"
            value={data.phone}
            onChange={handleChange}
          />
        </FormControl>

        </Flex>


        <Button type="submit" colorScheme="blue" mt={4}>
          Submit
        </Button>




      </form>
    </Box>
  );
};

export default Logi;