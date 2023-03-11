import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ResponsiveAppBar from "../NavBar/Navbar";
import Places from "../Places/Places";

export default function FoodListingContainer() {
  return (
    <>
      <ResponsiveAppBar />
      <Breadcrumbs />
      <Places />
    </>
  );
}
