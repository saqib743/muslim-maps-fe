import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import LocationAndSiteInformation from "../LocationsAndSiteInformation/LocationsAndSiteInformation";
import Menu from "../Menu/Menu";
import ResponsiveAppBar from "../NavBar/Navbar";
import Places from "../Places/Places";

export default function FoodListingContainer() {
  return (
    <>
      <ResponsiveAppBar />
      <Breadcrumbs />
      <Places />
      <Menu />
      <LocationAndSiteInformation />
    </>
  );
}
