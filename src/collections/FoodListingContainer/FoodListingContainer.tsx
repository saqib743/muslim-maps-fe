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
      <ResponsiveAppBar />
      <Breadcrumbs />
      <Places />
      <Menu />
      <LocationAndSiteInformation />
      <SimilarListings />
      <RecentlyViewed />
    </>
  );
}
