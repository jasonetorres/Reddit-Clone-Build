/*import "../styles/globals.css";*/
import type { AppProps } from "./pages/_app.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import Layout from "../components/Layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
    <Layout>
       <Component {...pageProps} />
    </Layout>
    </ChakraProvider>
  );
}

export default MyApp;