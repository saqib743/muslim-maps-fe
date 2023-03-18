import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "../styles/theme";
import ResponsiveAppBar from "@/collections/NavBar/Navbar";
import BottomNavigation from "@/collections/BottomNavigation/BottomNavigation";
import { Container, Grid, Typography } from "@mui/material";
import Footer from "@/collections/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid
        display={{
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
          xxl: "none",
        }}
        marginTop="30px"
      >
        <Container maxWidth="md">
          <Typography
            fontSize="48px"
            fontWeight="700"
            fontFamily="Gilroy"
            lineHeight="58px"
            letterSpacing="0.01em"
            textAlign="left"
          >
            This app is not intended to be viewed on this platform
          </Typography>
        </Container>
      </Grid>
      <Grid display={{ xs: "none", md: "block" }}>
        <ResponsiveAppBar />
        <Component {...pageProps} />
        <BottomNavigation />
        <Footer />
      </Grid>
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
