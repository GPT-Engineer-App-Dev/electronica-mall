import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Logic to handle search, e.g., filter products based on searchQuery
    console.log("Searching for:", searchQuery);
  };

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">ElectroShop</Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Products</Link>
          <Link href="#" color="white">About Us</Link>
          <Link href="#" color="white">Contact Us</Link>
        </HStack>
        <Spacer />
        <InputGroup maxW="300px" ml={4}>
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            bg="white"
            color="black"
          />
          <InputRightElement>
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              onClick={handleSearch}
              bg="blue.600"
              color="white"
            />
          </InputRightElement>
        </InputGroup>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" p={10} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Image src="/images/featured-product.jpg" alt="Featured Product" borderRadius="md" />
      </Box>

      {/* Product Grid */}
      <Box as="section" p={10}>
        <Heading size="lg" mb={6}>Featured Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          <GridItem bg="white" p={4} borderRadius="md" boxShadow="md">
            <Image src="/images/product1.jpg" alt="Product 1" mb={4} />
            <Text fontSize="lg" fontWeight="bold">Product 1</Text>
            <Text>$199.99</Text>
          </GridItem>
          <GridItem bg="white" p={4} borderRadius="md" boxShadow="md">
            <Image src="/images/product2.jpg" alt="Product 2" mb={4} />
            <Text fontSize="lg" fontWeight="bold">Product 2</Text>
            <Text>$299.99</Text>
          </GridItem>
          <GridItem bg="white" p={4} borderRadius="md" boxShadow="md">
            <Image src="/images/product3.jpg" alt="Product 3" mb={4} />
            <Text fontSize="lg" fontWeight="bold">Product 3</Text>
            <Text>$399.99</Text>
          </GridItem>
          <GridItem bg="white" p={4} borderRadius="md" boxShadow="md">
            <Image src="/images/product4.jpg" alt="Product 4" mb={4} />
            <Text fontSize="lg" fontWeight="bold">Product 4</Text>
            <Text>$499.99</Text>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" p={4} textAlign="center">
        <Text mb={2}>Contact Us: info@electroshop.com</Text>
        <HStack spacing={4} justify="center">
          <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
        </HStack>
        <Text mt={2}>© 2023 ElectroShop. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;