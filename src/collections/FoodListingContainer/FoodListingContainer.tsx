import { Container, Grid, Typography } from "@mui/material";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import LocationAndSiteInformation from "../LocationsAndSiteInformation/LocationsAndSiteInformation";
import Menu from "../Menu/Menu";
import ResponsiveAppBar from "../NavBar/Navbar";
import Places from "../Places/Places";
import RecentlyViewed from "../RecentlyViewed/RecentlyViewed";
import SimilarListings from "../SimilarListings/SimilarListings";

export default function FoodListingContainer() {
  return (
    <>
      <Grid display={{ xs: "none", lg: "block" }}>
        <ResponsiveAppBar />
        <Breadcrumbs />
        <Places />
        <Menu />
        <LocationAndSiteInformation />
        <SimilarListings />
        <RecentlyViewed />
        <BottomNavigation />
      </Grid>
      <Grid
        display={{ md: "block", lg: "none", xl: "none", xxl: "none" }}
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
    </>
  );
}
