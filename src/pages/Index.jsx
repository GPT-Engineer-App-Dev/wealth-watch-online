import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} bg="#f3f2ef">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading size="md">Financial Times</Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
          <Link href="#" color="white">Tech</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} p={4}>
        {/* Main Headline Section */}
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h1" size="xl" mb={4}>Main Headline Article</Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec libero fermentum, a tincidunt nisi fermentum. 
            Vivamus at justo nec urna vehicula tincidunt. Integer sit amet ligula nec urna malesuada tincidunt.
          </Text>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="md" mb={4}>Other Articles</Heading>
          <VStack align="start" spacing={4}>
            <Link href="#">Article 1</Link>
            <Link href="#">Article 2</Link>
            <Link href="#">Article 3</Link>
            <Link href="#">Article 4</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <HStack spacing={8} mb={{ base: 4, md: 0 }}>
            <Link href="#" color="white">Contact</Link>
            <Link href="#" color="white">Privacy Policy</Link>
            <Link href="#" color="white">Terms of Service</Link>
          </HStack>
          <Spacer />
          <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;