import { LocationCarousalProps, MenuCarousalProps } from "@/types";
import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

export default function LocationsCarousal({
  locations,
}: LocationCarousalProps) {
  return (
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
  );
}
