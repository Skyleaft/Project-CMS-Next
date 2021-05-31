import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import NextLink from 'next/link'
import { Link } from "@chakra-ui/react"


export default function ProductSimple({ product }: { product: any }) {
  const router = useRouter()
  const { API_URL } = process.env
  var a = 1
  const IMAGE = API_URL + product.gambar.url

  return (
    <Center py={6}>
      <Link style={{ textDecoration: 'none' }}>
        <NextLink href="/produk/[slug]" as={`/produk/${product.slug}`}>
          <Box
            role={'group'}
            p={6}
            w="280px"
            h="330px"
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'md'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
            >
              <Image
                rounded={'lg'}
                height={230}
                width={282}
                objectFit={'cover'}
                src={IMAGE}

              />
            </Box>
            <Box pt={2} align={'center'}>
              <Text
                color={'gray.500'}
                fontSize={'sm'}
                textTransform={'uppercase'}>
                {product.merek}
              </Text>
              <Center h="90px">
                <Heading
                  noOfLines={2}
                  fontSize={'md'}
                  fontFamily={'body'}
                  fontWeight={500}
                  _hover={{ color: "blue.500" }}>
                  {product.nama_produk}
                </Heading>
              </Center>
            </Box>
          </Box>
        </NextLink>
      </Link>
    </Center>
  );
}