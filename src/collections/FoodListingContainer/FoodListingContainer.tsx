import { Container, Grid, Typography } from "@mui/material";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import LocationAndSiteInformation from "../LocationsAndSiteInformation/LocationsAndSiteInformation";
import Menu from "../Menu/Menu";
import Places from "../Places/Places";
import RecentlyViewed from "../RecentlyViewed/RecentlyViewed";
import SimilarListings from "../SimilarListings/SimilarListings";

export default function FoodListingContainer() {
  return (
    <>
      <Breadcrumbs />
      <Places />
      <Menu />
      <LocationAndSiteInformation />
      <SimilarListings />
      <RecentlyViewed />
    </>
  );
}
