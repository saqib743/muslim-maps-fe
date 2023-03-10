import gulhaneSarkSofrasÄ± from "../../resources/restaurantsNearBy/gulhaneSarkSofrasÄ±.svg";
import sultanPalaceCafe from "../../resources/restaurantsNearBy/sultanPalaceCafe.svg";
import zerzevanFish from "../../resources/restaurantsNearBy/zerzevanFish&Kebab.svg";

import arrowLeft from "../../resources/arrowLeft.svg";
import arrowRight from "../../resources/arrowRight.svg";

import { Typography } from "@mui/material";
import Button from "@/components/Button/Button";
import LocationsCarousal from "@/components/LocationsCarousal/LocationsCarousal";
import { Box } from "@mui/system";
export default function RestaurantsNearBy() {
  return (
    <>
      <Box
        marginTop="30px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          fontSize="24px"
          fontFamily="Gilroy-semiBold"
          fontWeight="600"
          letterSpacing="0.01em"
          lineHeight="34.5px"
          textAlign="left"
          color="#010F07"
        >
          Restaurants nearby
        </Typography>
        <Box display="flex" alignItems="center">
          <Box marginLeft="20px">
            <Button
              onClick={() => {}}
              text="See All"
              variant="primary"
              justifyContent="space-between"
            />
          </Box>
          <Box marginLeft="20px">
            <Button
              icon={arrowLeft}
              onClick={() => {}}
              variant="primary"
              justifyContent="space-between"
            />
          </Box>
          <Box marginLeft="20px">
            <Button
              icon={arrowRight}
              onClick={() => {}}
              variant="primary"
              justifyContent="space-between"
            />
          </Box>
        </Box>
      </Box>
      <Box display="flex" marginTop="30px">
        <LocationsCarousal locations={Locations} />
      </Box>
    </>
  );
}
const Locations = [
  {
    image: gulhaneSarkSofrasÄ±,
    title: "Gulhane Sark SofrasÄ±",
    description: "Mediterranean Â· Turkish",
    reviews: { rating: 4, reviewCount: 98 },
    location: "âº â¢ 3.4 kms away",
  },
  {
    image: zerzevanFish,
    title: "Zerzevan Fish & Kebab",
    description: "Seafood Â· International",
    reviews: { rating: 4, reviewCount: 98 },
    location: "âº â¢ 3.4 kms away",
  },
  {
    image: sultanPalaceCafe,
    title: "Sultan Palace Cafe",
    description: "Seafood Â· Barbecue Â· Mediterranean",
    reviews: { rating: 4, reviewCount: 98 },
    location: "âº â¢ 3.4 kms away",
  },
  {
    image: gulhaneSarkSofrasÄ±,
    title: "Gulhane Sark SofrasÄ±",
    description: "Mediterranean Â· Turkish",
    reviews: { rating: 4, reviewCount: 98 },
    location: "âº â¢ 3.4 kms away",
  },
  {
    image: zerzevanFish,
    title: "Zerzevan Fish & Kebab",
    description: "Seafood Â· International",
    reviews: { rating: 4, reviewCount: 98 },
    location: "âº â¢ 3.4 kms away",
  },
  {
    image: sultanPalaceCafe,
    title: "Sultan Palace Cafe",
    description: "Seafood Â· Barbecue Â· Mediterranean",
    reviews: { rating: 4, reviewCount: 98 },
    location: "âº â¢ 3.4 kms away",
  },
  {
    image: gulhaneSarkSofrasÄ±,
    title: "Gulhane Sark SofrasÄ±",
    description: "Mediterranean Â· Turkish",
    reviews: { rating: 4, reviewCount: 98 },
    location: "âº â¢ 3.4 kms away",
  },
];
