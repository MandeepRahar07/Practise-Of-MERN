import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={5}>
      {/* Heading Box */}
      <Box textAlign="center" mb={5}>
        <Heading size="xl" fontWeight="bold">
          About Page
        </Heading>
        <Text fontSize="md" color="gray.500" mt={2}>
          Explore more about our company.
        </Text>
      </Box>

      {/* How You Can Post a Blog */}
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        boxShadow="md"
        borderRadius="md"
        mb={5}
      >
        <Box width={{ base: "100%", md: "100%" }} p={4}>
          <Heading fontSize="xl" textAlign={{ base: "center", md: "left" }}>
            How You Can Post a Blog:
          </Heading>
          <Text fontSize="md" textAlign={{ base: "center", md: "left" }}>
            Are you eager to share your thoughts, experiences, or expertise with
            the world? Our "How You Can Post a Blog" section provides a
            step-by-step guide to help you become a confident blogger.
          </Text>
        </Box>

        <Box width={{ base: "100%", md: "50%" }}>
          <Image
            src="https://axelena.com/wp-content/uploads/2016/04/blog-writing.png"
            alt="blog"
            maxH="200px"
            objectFit="cover"
          />
        </Box>
      </Flex>

      {/* About Our Company */}
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        boxShadow="md"
        borderRadius="md"
        mb={5}
      >
        <Box width={{ base: "100%", md: "100%" }} p={4}>
          <Heading fontSize="xl" textAlign={{ base: "center", md: "left" }}>
            About Our Company:
          </Heading>
          <Text fontSize="md" textAlign={{ base: "center", md: "left" }}>
            Welcome to nortsofthelp, a trusted leader in TECH. Since then, we've
            been committed to providing our readers with valuable insights,
            reliable information, and a community that shares your passion.
          </Text>
        </Box>

        <Box width={{ base: "100%", md: "50%" }}>
          <Image
            src="https://tohundguide.com/wp-content/uploads/2020/03/features-of-private-limited-1024x887.jpg"
            alt="company"
            maxH="200px"
            objectFit="cover"
          />
        </Box>
      </Flex>

      {/* Our Safety Policy */}
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        boxShadow="md"
        borderRadius="md"
        mb={5}
      >
        <Box width={{ base: "100%", md: "100%" }} p={4}>
          <Heading fontSize="xl" textAlign={{ base: "center", md: "left" }}>
            Our Safety Policy:
          </Heading>
          <Text fontSize="md" textAlign={{ base: "center", md: "left" }}>
            At nortsofthelp, your safety and privacy are our top priorities.
            Our comprehensive safety policy outlines the measures we take to
            ensure that your online experience with us is secure and enjoyable.
          </Text>
        </Box>

        <Box width={{ base: "100%", md: "50%" }}>
          <Image
            src="https://thumbs.dreamstime.com/b/osha-concept-occupational-safety-health-administration-osha-concept-occupational-safety-health-administration-government-182470959.jpg"
            alt="safety"
            maxH="200px"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
