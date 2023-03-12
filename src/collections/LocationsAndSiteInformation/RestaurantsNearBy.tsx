import gulhaneSarkSofrası from "../../resources/restaurantsNearBy/gulhaneSarkSofrası.svg";
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
          fontFamily="Gilroy"
          fontWeight="600"
          letterSpacing="0.01em"
          lineHeight="35px"
          textAlign="left"
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
    image: gulhaneSarkSofrası,
    title: "Gulhane Sark Sofrası",
    description: "Mediterranean · Turkish",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: zerzevanFish,
    title: "Zerzevan Fish & Kebab",
    description: "Seafood · International",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: sultanPalaceCafe,
    title: "Sultan Palace Cafe",
    description: "Seafood · Barbecue · Mediterranean",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
];
