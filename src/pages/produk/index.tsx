import fetch from 'isomorphic-unfetch'
import Prd from "components/CardProduk";
import styled from '@emotion/styled'
import {
    Flex,
    Box,
    Center,
    useColorModeValue,
    Heading,
    Container,
    Text,
    Stack,
    Image,
    Grid,
    Button,
    ButtonGroup
} from '@chakra-ui/react';
import { Link } from "@chakra-ui/react"
import { Select } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import { Checkbox, CheckboxGroup } from "@chakra-ui/react"

function ProductsPage({ products, page, numberOfProducts }: { products: any, page: any, numberOfProducts: any }) {
    const router = useRouter()

    const lastPage = Math.ceil(numberOfProducts / 8)

    const { API_URL } = process.env

    return (
        <Flex>
            <Box bg="white" minW="240px" h="600px" boxShadow="md" p="6" rounded="md" display={{ sm: 'none', md: 'block' }}>
                <Heading size="md" mb="6">
                    Filter
                </Heading>
                <Stack spacing="24px">
                    <Stack>
                        <Text>
                            Kategori
                        </Text>
                        <Select placeholder="Select option">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </Stack>
                    <Stack>
                        <Text>
                            Merek
                        </Text>
                        <CheckboxGroup colorScheme='blue'>
                            <Checkbox value="Varro">Varro</Checkbox>
                            <Checkbox value="D-Link">D-Link</Checkbox>
                            <Checkbox value="Buldozer">Buldozer</Checkbox>
                            <Checkbox value="Fingerspot">Fingerspot</Checkbox>
                            <Checkbox value="Vurrion">Vurrion</Checkbox>
                        </CheckboxGroup>
                    </Stack>
                </Stack>
            </Box>
            <Box maxW="1300px" ml="8">
                <Heading size="md">Semua Produk</Heading>
                <Grid templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(4, 1fr)", sm: "repeat(2, 1fr)" }} gap={6}>
                    {products.map((product: any) => (
                        <Prd key={product.id} product={product} />
                    ))}

                </Grid>

                <Box variant="container" >
                    <Center>
                        <Flex mt={12} pl={20} justifyContent="space-between" maxWidth={300}>
                            <Button colorScheme="teal" variant="outline" onClick={() => router.push(`/produk?page=${page - 1}`)}
                                disabled={page <= 1}>Previous</Button>
                            <Button colorScheme="teal" variant="outline" onClick={() => router.push(`/produk?page=${page + 1}`)}
                                disabled={page >= lastPage}>Next</Button>
                        </Flex>
                    </Center>

                </Box>
            </Box>
        </Flex>


    )
}


export async function getServerSideProps({ query: { page = 1 } }) {
    const { API_URL } = process.env

    const start = +page === 1 ? 0 : (+page - 1) * 8

    const numberOfProductsResponse = await fetch(`${API_URL}/products/count`)
    const numberOfProducts = await numberOfProductsResponse.json()

    const res = await fetch(`${API_URL}/products?_limit=8&_start=${start}`)
    const data = await res.json()

    return {
        props: {
            products: data,
            page: +page,
            numberOfProducts
        }
    }
}

// export async function getServerSideProps() {
//     const { API_URL } = process.env

//     const res = await fetch(`${API_URL}/products`)
//     const data = await res.json()

//     return {
//         props: {
//             products: data
//         }
//     }
// }

export default ProductsPage