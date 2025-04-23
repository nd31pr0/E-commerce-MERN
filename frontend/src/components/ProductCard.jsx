import {Box, HStack, Heading, IconButton, Image, Text, useColorModeValue, Box} from "@chakra-ui/react"
import { EditIcon, DeleteIcon } from "@chakra-ui/icons"
const ProductCard = (product) => {
  return (
    <Box
    shadow='lg'
    rounded='lg'
    overflow='hidden'
    transition='all 0.3'
    _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover'/>

        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                {product.name}
            </Heading>

            <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                ${product.price}
            </Text>

            <HStack spacing={2}>
                <IconButton icon={<EditIcon />} colorScheme='blue' />
                <IconButton icon={<DeleteIcon />} colorScheme='red' />
            </HStack>
        </Box>
    </Box>
  )
}

export default ProductCard