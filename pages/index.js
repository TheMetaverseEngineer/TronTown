import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import Content from "../components/landing/Content";
import LandingNav from "../components/landing/LandingNav";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D43053",
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

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>TronTown || Home</title>
        <meta name="description" content="Tron Town" />
      </Head>
      <main>
        <Box
          className="relative min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-right md:bg-center md:justify-start"
          sx={{
            background: {
              xxs: "url('/assets/images/landingBg-mobile.jpg')",
              md: "url('/assets/images/landingBg-desktop.jpg')",
            },
          }}
        >
          <LandingNav />
          <Content />
        </Box>
      </main>
    </ThemeProvider>
  );
}
