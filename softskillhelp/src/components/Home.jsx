import React from 'react';
import { Box, Flex, Image, Text, Container, Button } from '@chakra-ui/react';
import { Link as Routerlink } from 'react-router-dom';
import Logi from './userdetails';
import Userconnect from './userdetails';
function Home() {
  return (
    <Container maxW="80%">
      <Box alignItems="center" justifyContent="center" height="100vh">
        <Box p="4" textAlign="center">
          <Flex
          flexDirection={{ base: "column", md: "column" ,lg: "row" }}>
            <Image
              src={require('./image/helo.png')} // Using the imported image
              alt="Image"
              boxSize="400px"
              borderRadius="5px"
              objectFit="cover"
              mx="auto" // Center the image horizontally
              maxW="120%" // Set maximum width to 100% for full width
              height="100%"
            />
            <Box>
            <Routerlink to="/blogdetails">
              <Text fontSize="2xl" fontWeight="bold" mt="4" color="blue.500">
                How to install windows 10 ?
              </Text>
              </Routerlink>
              <Text>
                Installing Windows 10 on a computer typically involves several steps. Please note that the process may vary slightly depending on your specific computer's manufacturer and configuration.
               
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box p="4" textAlign="center">
          <Flex
           flexDirection={{ base: "column", md: "column" ,lg: "row" }}>
            <Image
              src={require('./image/help2.png')} // Using the imported image
              alt="Image"
              boxSize="400px"
              borderRadius="5px"
              objectFit="cover"
              mx="auto" // Center the image horizontally
              maxW="120%" // Set maximum width to 100% for full width
              height="100%"
            />
            <Box>
            <Routerlink to="/blogdetails">
              <Text fontSize="2xl" fontWeight="bold" mt="4" color="blue.500">
              How to setup office 365 ?

              </Text>
              </Routerlink>
              <Text>
Setting up Office 365 involves a series of steps, and the exact process can vary depending on your specific circumstances and subscription plan. However, I can provide you with a general overview of the steps to set up Office 365
              </Text>
             
            </Box>
          </Flex>
        </Box>

        <Box p="4" textAlign="center">
          <Flex 
           flexDirection={{ base: "column", md: "column" ,lg: "row" }}>
            <Image
              src={require('./image/error0444.png')} // Using the imported image
              alt="Image"
              boxSize="400px"
              borderRadius="5px"
              objectFit="cover"
              mx="auto" // Center the image horizontally
              maxW="120%" // Set maximum width to 100% for full width
              height="100%"
            />
            <Box>
            <Routerlink to="/blogdetails">
              <Text fontSize="2xl" fontWeight="bold" mt="4" color="blue.500">
              how to fix office 365 error code 0-2054?

              </Text>
              </Routerlink>
              <Text>
              The Office 365 error code 0-2054 can occur during the installation or update of Microsoft Office applications. This error code typically indicates a problem with the Office installation process. Here are several steps you can follow to fix this error:
              </Text>
              
            </Box>
          </Flex>
        </Box>




        <Box p="4" textAlign="center">
          <Flex
           flexDirection={{ base: "column", md: "column" ,lg: "row" }}>
            <Image
              src={require('./image/talkwithperson.png')} // Using the imported image
              alt="Image"
              boxSize="400px"
              borderRadius="5px"
              objectFit="cover"
              mx="auto" // Center the image horizontally
              maxW="120%" // Set maximum width to 100% for full width
              height="100%"
            />
            <Box>
            <Routerlink to="/blogdetails">
              <Text fontSize="2xl" fontWeight="bold" mt="4" color="blue.500">
              Help.Microsoftcom talk to a person is for what ?
              </Text>
              </Routerlink>
              <Text>
Setting up Office 365 involves a series of steps, and the exact process can vary depending on your specific circumstances and subscription plan. However, I can provide you with a general overview of the steps to set up Office 365
              </Text>
              
            </Box>
          </Flex>
        </Box>




        <Box p="4" textAlign="center">
          <Flex
           flexDirection={{ base: "column", md: "column" ,lg: "row" }}>
            <Image
              src={require('./image/callus.png')} // Using the imported image
              alt="Image"
              boxSize="400px"
              borderRadius="5px"
              objectFit="cover"
              mx="auto" // Center the image horizontally
              maxW="120%" // Set maximum width to 100% for full width
              height="100%"
            />
            <Box ml="10px">
            <Routerlink to="/blogdetails">
              <Text fontSize="2xl" fontWeight="bold" mt="4" color="blue.500">
              how to fix microsoft office encountered error during setup?

              </Text>
              </Routerlink>
              <Text>
              To create a support ticket with Microsoft for assistance with a Microsoft product or service, you can follow these steps:
              </Text>
           
            </Box>
          </Flex>
        </Box>

        <Box p="4" textAlign="center" ml="10px">
          <Flex 
           flexDirection={{ base: "column", md: "column" ,lg: "row" }}>
            <Image
              src={require('./image/help.png')} // Using the imported image
              alt="Image"
              boxSize="400px"
              borderRadius="5px"
              objectFit="cover"
              mx="auto" // Center the image horizontally
              maxW="120%" // Set maximum width to 100% for full width
              height="100%"
            />
            <Box ml="10px">
              <Routerlink to="/blogdetails">
              <Text fontSize="2xl" fontWeight="bold" mt="4" color="blue.500">
              How to repir windows installation error?

              </Text>
              </Routerlink>
              <Text>

              Repairing a Windows installation error typically involves troubleshooting and fixing the issue that's preventing Windows from functioning correctly. 
              </Text>
             
            </Box>
          </Flex>
        </Box>
      </Box>
    
       
    
    </Container>
  );
}

export default Home;
