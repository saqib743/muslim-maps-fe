import historicAreasOfIstanbul from "../../resources/attractionsNearBy/historicAreasOfIstanbul.svg";
import aasofyaCamii from "../../resources/attractionsNearBy/aasofyaCamii.svg";
import heritageArtGallery from "../../resources/attractionsNearBy/heritageArtGallery.svg";

import arrowLeft from "../../resources/arrowLeft.svg";
import arrowRight from "../../resources/arrowRight.svg";

import { Typography } from "@mui/material";
import Button from "@/components/Button/Button";
import LocationsCarousal from "@/components/LocationsCarousal/LocationsCarousal";
import { Box } from "@mui/system";
export default function AttractionsNearBy() {
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
          Attractions nearby
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
    image: historicAreasOfIstanbul,
    title: "Historic Areas Of Istanbul",
    description: "HIstoric Place",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: aasofyaCamii,
    title: "Aasofya Camii",
    description: "Theater",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: heritageArtGallery,
    title: "Heritage Art Gallery",
    description: "Art Galleries",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: historicAreasOfIstanbul,
    title: "Historic Areas Of Istanbul",
    description: "HIstoric Place",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: aasofyaCamii,
    title: "Aasofya Camii",
    description: "Theater",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: heritageArtGallery,
    title: "Heritage Art Gallery",
    description: "Art Galleries",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: historicAreasOfIstanbul,
    title: "Historic Areas Of Istanbul",
    description: "HIstoric Place",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
];
