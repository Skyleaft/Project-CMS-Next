import { Box, Grid, Flex , Container} from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react"

import Prd from "components/CardProduk";
import Banner from "components/layout/Banner";

import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Home = ({ products }: { products: any }) => {
  return (
    <Container maxW="1300px">
      <Banner />
      <div>
        <Heading>Hot Produk</Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {products.map((product: any) => (
            <Prd key={product.id} product={product} />
          ))}

        </Grid>
      </div>
    </Container>
  );
};


export async function getServerSideProps() {
  const { API_URL } = process.env

  // const res = await fetch(`${API_URL}/products`)
  const res = await fetch(`${API_URL}/products?produk_populer=true`);
  const data = await res.json()

  return {
    props: {
      products: data
    }
  }
}

export default Home;
