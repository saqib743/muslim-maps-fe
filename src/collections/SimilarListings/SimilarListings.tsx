import hagiaSophiaMosque from "../../resources/similarListing/hagiaSophiaMosque.svg";
import royalInciHotel from "../../resources/similarListing/royalInciHotel.svg";
import aasofiyaCamii from "../../resources/similarListing/aasofiyaCamii.svg";
import hotel from "../../resources/similarListing/hotel.svg";
import sultanMehmatHotel from "../../resources/similarListing/sultanMehmatHotel.svg";

import arrowLeft from "../../resources/arrowLeft.svg";
import arrowRight from "../../resources/arrowRight.svg";

import { Typography } from "@mui/material";
import Button from "@/components/Button/Button";
import LocationsCarousal from "@/components/LocationsCarousal/LocationsCarousal";
import { Box } from "@mui/system";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
export default function SimilarListings() {
  return (
    <Box
      borderTop="2px solid #F3F2F2"
      sx={{ backgroundColor: "#FCFCFC" }}
      paddingBottom="30px"
    >
      <ResponsiveContainer>
        <>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop="30px"
          >
            <Typography
              fontSize="24px"
              fontFamily="Gilroy"
              fontWeight="600"
              letterSpacing="0.01em"
              lineHeight="35px"
              textAlign="left"
            >
              Similar Listing
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
      </ResponsiveContainer>
    </Box>
  );
}
const Locations = [
  {
    image: hagiaSophiaMosque,
    title: "Hagia Sophia Mosque",
    description: "Seafood · International ",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },

  {
    image: aasofiyaCamii,
    title: "Aasofya Camii",
    description: "Theater",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: sultanMehmatHotel,
    title: "Sultan Mehmat Hotel",
    description: "Hotel · $150/night",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: hagiaSophiaMosque,
    title: "Hagia Sophia Mosque",
    description: "Seafood · International ",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: royalInciHotel,
    title: "Royal Inci Hotel",
    description: "Hotel · $150/night",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },

  {
    image: hotel,
    title: "Hotel",
    description: "Mediterranean · Turkish ",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: hagiaSophiaMosque,
    title: "Hagia Sophia Mosque",
    description: "Seafood · International ",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: royalInciHotel,
    title: "Royal Inci Hotel",
    description: "Hotel · $150/night",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: sultanMehmatHotel,
    title: "Sultan Mehmat Hotel",
    description: "Hotel · $150/night",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: hagiaSophiaMosque,
    title: "Hagia Sophia Mosque",
    description: "Seafood · International ",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: aasofiyaCamii,
    title: "Aasofya Camii",
    description: "Theater",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: sultanMehmatHotel,
    title: "Sultan Mehmat Hotel",
    description: "Hotel · $150/night",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
  {
    image: hagiaSophiaMosque,
    title: "Hagia Sophia Mosque",
    description: "Seafood · International ",
    reviews: { rating: 4, reviewCount: 98 },
    location: "₺ • 3.4 kms away",
  },
];
