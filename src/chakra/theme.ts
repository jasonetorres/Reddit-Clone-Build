// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
import '@fontsource/open-sans';

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#ff3c00 ",
      // ...
      900: "#1a202c",
    },
  },
  fonts: {
    body: "open sans, sans-serif",
  },
});
