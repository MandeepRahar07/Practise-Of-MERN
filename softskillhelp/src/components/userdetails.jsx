import { Box, Heading, Flex, Text, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Userconnect = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle the form submission, e.g., sending the data to a backend server
    console.log("Form data submitted:", formData);
  
    // Reset the form fields by updating the state
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      message: "",
    });
  
    toast({
      title: "Form Submitted",
      description: "Your message has been sent successfully.",
      status: "success",
      duration: 5000, // Display the toast for 5 seconds
      isClosable: true,
    });
  };
  

  return (
    <Box p={4}  >
      <Flex direction={{ base: "column", md: "row" }}>
        {/* .........................................box for description and image............................................ */}
        <Box flex={{ base: "1", md: "2" }} mr={{ md: 20 }}>
          {/* ........................................Description ..................................... */}
          <Box p={4}>
            {/* ... your existing content ... */}

            <Heading mb={4} fontSize={{ base: "2xl", md: "4xl" }} textAlign="left" mt={10}>
              Contact Us
            </Heading>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                mb={2}
                required
              />
              <Input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                mb={2}
                required
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                mb={2}
                required
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write a message..."
                size="sm"
                mb={4}
                required
              />
              <Button type="submit" colorScheme="teal">
                Submit
              </Button>
            </form>
          </Box>
        </Box>
       
      </Flex>
    </Box>
  );
};

export default Userconnect;
