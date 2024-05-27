import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack, IconButton, Input, InputGroup, InputRightElement, Checkbox, CheckboxGroup, Stack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Select, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");

  const handleSearch = () => {
    // Logic to handle search, e.g., filter products based on searchQuery
    console.log("Searching for:", searchQuery);
  };

  const handleFilter = () => {
    // Logic to filter products based on selected filters
    console.log("Filtering products with:", { priceRange, selectedBrands, selectedRating });
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

      {/* Main Content */}
      <Flex>
        <Box flex="1" maxW="300px" mr={6}>
          {/* Filter Sidebar */}
          <Box as="aside" p={4} bg="gray.50" borderRadius="md" boxShadow="md" mb={6}>
            <Heading size="md" mb={4}>Filter Products</Heading>
            <Box mb={4}>
              <Text mb={2}>Price Range</Text>
              <Slider
                aria-label="price-range-slider"
                defaultValue={[0, 500]}
                min={0}
                max={500}
                step={10}
                onChangeEnd={(val) => setPriceRange(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb boxSize={6} index={0} />
                <SliderThumb boxSize={6} index={1} />
              </Slider>
              <Text mt={2}>${priceRange[0]} - ${priceRange[1]}</Text>
            </Box>
            <Box mb={4}>
              <Text mb={2}>Brand</Text>
              <CheckboxGroup onChange={setSelectedBrands}>
                <Stack spacing={2}>
                  <Checkbox value="Brand A">Brand A</Checkbox>
                  <Checkbox value="Brand B">Brand B</Checkbox>
                  <Checkbox value="Brand C">Brand C</Checkbox>
                  <Checkbox value="Brand D">Brand D</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>
            <Box mb={4}>
              <Text mb={2}>Rating</Text>
              <Select placeholder="Select rating" onChange={(e) => setSelectedRating(e.target.value)}>
                <option value="1">1 Star & Up</option>
                <option value="2">2 Stars & Up</option>
                <option value="3">3 Stars & Up</option>
                <option value="4">4 Stars & Up</option>
                <option value="5">5 Stars</option>
              </Select>
            </Box>
            <Button colorScheme="blue" onClick={handleFilter}>Apply Filters</Button>
          </Box>
        </Box>
        <Box flex="3">
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
        </Box>
      </Flex>

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