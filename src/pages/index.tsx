import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {theme} from "../chakra/theme.ts";

const Home: NextPage = () => {
  return <div>Hello</div>;
};

  export default Home;

import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
    </ChakraProvider>
  )
}