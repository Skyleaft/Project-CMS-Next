import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";


type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box margin="0 auto" transition="0.5s ease-out">
        <Meta />
        <Box margin="8">
          <Box as="main" marginY={18}>
            {children}
          </Box>

        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
