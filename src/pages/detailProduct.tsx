import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/react"
import { Text, Grid, Image, Heading, Flex, Stack } from "@chakra-ui/react"
import { Center } from '@chakra-ui/layout';
import ImageGallery from 'react-image-gallery';
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
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import 'react-tabs/style/react-tabs.css';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];


const detailProduct = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack>
      <Grid templateColumns={{md: "repeat(2, 1fr)", base:"repeat(1, 1fr)"}} gap={2} mb={12}>
        <Box>
          <Center minW="500px">
            <ImageGallery items={images} showPlayButton={false} />
          </Center>
        </Box>
        <Box minW="500px" pl={6} >
          <Stack>
            <Breadcrumb spacing="8px" mb={2} separator={<ChevronRightIcon color="gray.500" />}>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Produk</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">Merek</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Nama Produk</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading size="xs">Sub Produk</Heading>
            <Heading size="xl">Nama Produk</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sodales purus. Maecenas gravida sit amet mauris sed maximus. Fusce dictum lacinia nibh, vitae malesuada nisi commodo at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus dolor, condimentum quis accumsan vel, consequat nec magna. Suspendisse feugiat arcu a quam varius, nec lacinia tortor imperdiet. Nunc dictum orci urna, eu scelerisque risus egestas tempus. Cras vel finibus urna. Nunc lobortis sapien at tincidunt imperdiet.
            </Text>
          </Stack>
        </Box>
      </Grid>

      <Stack>
        <AspectRatio ratio={21 / 9}>
          <Image
            objectFit="fill"
            src="https://picsum.photos/seed/picsum/800/300"
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

      <Box>

      </Box>
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


    </Stack>

  );
};

export default detailProduct;