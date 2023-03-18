import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import LocationAndSiteInformation from "../LocationsAndSiteInformation/LocationsAndSiteInformation";
import Menu from "../Menu/Menu";
import Places from "../Places/Places";
import RecentlyViewed from "../RecentlyViewed/RecentlyViewed";
import ReviewsAndQA from "../ReviewsAndQA/ReviewsAndQA";
import SimilarListings from "../SimilarListings/SimilarListings";

export default function FoodListingContainer() {
  return (
    <>
      <Breadcrumbs />
      <Places />
      <Menu />
      <LocationAndSiteInformation />
      <SimilarListings />
      <ReviewsAndQA />
      <RecentlyViewed />
    </>
  );
}
