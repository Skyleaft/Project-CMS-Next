import {
    Box,
    Text, Grid, Image, Heading, Flex, Stack
} from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    SimpleGrid,
    AspectRatio,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Container,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, ChevronRightIcon } from '@chakra-ui/icons'
import ImageGallery from 'react-image-gallery';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Center } from '@chakra-ui/layout';
import 'react-tabs/style/react-tabs.css';

import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import { Button } from "@chakra-ui/button";

export const getStaticPaths = async () => {
    const { API_URL } = process.env

    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();

    const paths = data.map(product => {
        return {
            params: { id: product.slug.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

const { publicRuntimeConfig } = getConfig()

export const getStaticProps = async (context) => {
    const { API_URL } = process.env

    const id = context.params.id;
    const response = await fetch(`${API_URL}/products?slug=${id}`);
    // ${id}
    const data = await response.json();
    
    // const res = await fetch(`${API_URL}/banners?_where[product.id]=` + id);
    // const databanner = await res.json();

    return {
        props: { product: data[0] }
    }
}

function ViewProduct({ product }: { product: any }) {
    const { colorMode } = useColorMode();
    const { API_URL } = process.env;
    
    const images = [
        {
            original: API_URL + product.gambar.url,
            thumbnail: API_URL + product.gambar.url,
        },
        // {
        //   original: 'https://picsum.photos/id/1018/1000/600/',
        //   thumbnail: 'https://picsum.photos/id/1018/250/150/',
        // }
        // ,
        // {
        //   original: 'https://picsum.photos/id/1015/1000/600/',
        //   thumbnail: 'https://picsum.photos/id/1015/250/150/',
        // },
        // {
        //   original: 'https://picsum.photos/id/1019/1000/600/',
        //   thumbnail: 'https://picsum.photos/id/1019/250/150/',
        // },
    ];

    return (
        <Stack>
            <Center>
                <Grid templateColumns={{ md: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }} gap={2} mb={12} maxW="1300px">
                    <Box>
                        <Center minW="500px">
                            <ImageGallery items={images} showPlayButton={false} />
                        </Center>
                    </Box>
                    <Box minW="500px" pl={6} >
                        <Stack>
                            <Breadcrumb spacing="8px" mb={2} separator={<ChevronRightIcon color="gray.500" />}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/produk">Produk</BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#">{product.category.nama}</BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink href="#">{product.merek}</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <Heading size="xs">{product.banners.id}</Heading>
                            <Heading size="xl">{product.nama_produk}</Heading>
                            <Text whiteSpace="pre-line">
                                {product.deskripsi}
                            </Text>
                        </Stack>
                    </Box>
                </Grid>
            </Center>

            <Stack>
                <AspectRatio ratio={21 / 9}>
                    <Image
                        objectFit="fill"
                        src="https://picsum.photos/seed/picsum/1200/700"
                        alt="Dan Abramov"
                    />
                </AspectRatio>
                <AspectRatio ratio={21 / 9}>
                    <Image
                        objectFit="fill"
                        src="https://picsum.photos/seed/picsum/1200/700"
                        alt="Dan Abramov"
                    />
                </AspectRatio>
            </Stack>
            <Center>

                <Container maxW={1300}>
                    <Tabs>
                        <TabList>
                            <Tab>Speksifikasi</Tab>
                            <Tab>Galeri</Tab>
                            <Tab>Support</Tab>
                            <Tab>Download</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <Table variant="simple">
                                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                                    <Thead>
                                        <Tr>
                                            <Th>To convert</Th>
                                            <Th>into</Th>
                                            <Th isNumeric>multiply by</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>inches</Td>
                                            <Td>millimetres (mm)</Td>
                                            <Td isNumeric>25.4</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>feet</Td>
                                            <Td>centimetres (cm)</Td>
                                            <Td isNumeric>30.48</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>yards</Td>
                                            <Td>metres (m)</Td>
                                            <Td isNumeric>0.91444</Td>
                                        </Tr>
                                    </Tbody>
                                    <Tfoot>
                                        <Tr>
                                            <Th>To convert</Th>
                                            <Th>into</Th>
                                            <Th isNumeric>multiply by</Th>
                                        </Tr>
                                    </Tfoot>
                                </Table>
                            </TabPanel>
                            <TabPanel>
                                <SimpleGrid
                                    columns={{ base: 2, md: 3, sm: 1 }}
                                    spacing={4}>
                                    <Image
                                        boxSize="400px"
                                        objectFit="fill"
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        alt="Dan Abramov"
                                    />
                                    <Image
                                        boxSize="400px"
                                        objectFit="cover"
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        alt="Dan Abramov"
                                    />
                                    <Image
                                        boxSize="400px"
                                        objectFit="cover"
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        alt="Dan Abramov"
                                    />
                                    <Image
                                        boxSize="400px"
                                        objectFit="cover"
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        alt="Dan Abramov"
                                    />
                                </SimpleGrid>
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>three!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                </Container>

            </Center>
        </Stack>
    )
}

export default ViewProduct