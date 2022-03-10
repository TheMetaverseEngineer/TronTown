import { Box } from "@mui/material";
import MarketNav from "./MarketNav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TronWebProvider from "../providers/TronWebProvider";
import Script from "next/script";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D80024 !important",
    },
    //   secondary: {
    //     main: "#9FCC3B",
    //   },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
});

const MarketplaceLayout = ({ children }) => {
  return (
    <>
      <TronWebProvider>
        <ThemeProvider theme={theme}>
          <Box
            className="flex bg-cover bg-center min-h-screen"
            sx={{ background: "url('/assets/images/marketBg.png')" }}
          >
            <MarketNav />
            {children}
          </Box>
        </ThemeProvider>
      </TronWebProvider>
      <Script
        src="https://kit.fontawesome.com/2d29bfc728.js"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default MarketplaceLayout;
