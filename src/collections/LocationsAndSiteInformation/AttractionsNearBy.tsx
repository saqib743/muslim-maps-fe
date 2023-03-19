import historicAreasOfIstanbul from "../../resources/attractionsNearBy/historicAreasOfIstanbul.svg";
import aasofyaCamii from "../../resources/attractionsNearBy/aasofyaCamii.svg";
import heritageArtGallery from "../../resources/attractionsNearBy/heritageArtGallery.svg";

import arrowLeft from "../../resources/arrowLeft.svg";
import arrowRight from "../../resources/arrowRight.svg";
import arrowLeftAlt from "../../resources/arrowLeftAlt.svg";
import arrowRightAlt from "../../resources/arrowRightAlt.svg";

import { Rating, Typography } from "@mui/material";
import Button from "@/components/Button/Button";
import { Box } from "@mui/system";
import { MutableRefObject, useRef } from "react";
import Image from "next/image";
export default function AttractionsNearBy() {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  const handleScrollLeft = () => {
    let scrollTarget = ref.current.scrollLeft - 325;
    if (scrollTarget < 0) scrollTarget = 0;
    const step = () => {
      if (ref.current.scrollLeft > scrollTarget) {
        ref.current.scrollLeft -= 35;
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };
  const handleScrollRight = () => {
    let scrollTarget = ref.current.scrollLeft + 325;
    const step = () => {
      if (ref.current.scrollLeft < scrollTarget) {
        ref.current.scrollLeft += 35;
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };
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
              iconAlt={arrowLeftAlt}
              onClick={() => handleScrollLeft()}
              variant="primary"
              justifyContent="space-between"
            />
          </Box>
          <Box marginLeft="20px">
            <Button
              icon={arrowRight}
              iconAlt={arrowRightAlt}
              onClick={() => handleScrollRight()}
              variant="primary"
              justifyContent="space-between"
            />
          </Box>
        </Box>
      </Box>
      <Box display="flex" marginTop="30px">
        <Box
          width="100%"
          overflow="auto"
          sx={{
            "::-webkit-scrollbar": {
              height: "5px",
            },
            " ::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 5px #D5F4DC",
              borderRadius: "10px",
            },
            "::-webkit-scrollbar-thumb": {
              background: "#91D29F",
              borderRadius: "5px",
            },
            "::-webkit-scrollbar-thumb:hover": {
              background: "#1E692E",
            },
          }}
          display="flex"
          ref={ref}
        >
          {locations.map((item, key) => {
            return (
              <Box
                border="1px solid #F0F0F0"
                padding="5px"
                borderRadius="10px"
                key={key}
                marginRight="20px"
                width="min-content"
              >
                <Image src={item.image} alt={item.title} />
                <Typography
                  fontSize="16px"
                  fontFamily="Gilroy-semiBold"
                  fontWeight="600"
                  lineHeight="26px"
                  letterSpacing="0.01em"
                  textAlign="left"
                  margin="5px 10px 0px 10px"
                >
                  {item.title}
                </Typography>

                <Typography
                  fontSize="12px"
                  fontFamily="Gilroy-medium"
                  fontWeight="500"
                  lineHeight="26px"
                  letterSpacing="0.01em"
                  textAlign="left"
                  margin="5px 10px 0px 10px"
                  color="#646467"
                >
                  {item.description}
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Rating value={item.reviews.rating} />
                  <Typography
                    fontSize="12px"
                    fontFamily="Gilroy"
                    fontWeight="400"
                    lineHeight="22px"
                    letterSpacing="0.01em"
                    textAlign="left"
                    margin="5px 10px 0px 10px"
                  >
                    {item.reviews.reviewCount + " Reviews"}
                  </Typography>
                </Box>

                <Typography
                  fontSize="14px"
                  fontFamily="Gilroy"
                  fontWeight="500"
                  lineHeight="26px"
                  letterSpacing="0.01em"
                  textAlign="left"
                  margin="5px 10px 0px 10px"
                  color="#646467"
                >
                  {item.location}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
const locations = [
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
];
