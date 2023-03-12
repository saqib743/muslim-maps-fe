import { LocationCarousalProps, MenuCarousalProps } from "@/types";
import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

export default function LocationsCarousal({
  locations,
}: LocationCarousalProps) {
  return (
    <>
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
              fontFamily="Gilroy-light"
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
              fontFamily="Gilroy-light"
              fontWeight="500"
              lineHeight="26px"
              letterSpacing="0.01em"
              textAlign="left"
              margin="5px 10px 0px 10px"
            >
              {item.description}
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Rating value={item.reviews.rating} />
              <Typography
                fontSize="12px"
                fontFamily="Gilroy-light"
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
              fontFamily="Gilroy-light"
              fontWeight="500"
              lineHeight="26px"
              letterSpacing="0.01em"
              textAlign="left"
              margin="5px 10px 0px 10px"
            >
              {item.location}
            </Typography>
          </Box>
        );
      })}
    </>
  );
}
