import { MenuCarousalProps } from "@/types";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

export default function MenuCarousal({ menu }: MenuCarousalProps) {
  return (
    <>
      {menu.map((item, key) => {
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
              fontSize="20px"
              fontFamily="Gilroy-semiBold"
              fontWeight="600"
              lineHeight="30px"
              letterSpacing="0.01em"
              textAlign="left"
              margin="5px 10px 0px 10px"
            >
              {item.title}
            </Typography>
            <Typography
              fontSize="14px"
              fontFamily="Gilroy"
              fontWeight="400"
              lineHeight="24px"
              letterSpacing="0.01em"
              textAlign="left"
              margin="5px 10px 0px 10px"
              color="#646467"
            >
              {item.description}
            </Typography>

            <Typography
              fontSize="20px"
              fontFamily="Gilroy-semiBold"
              fontWeight="600"
              lineHeight="30px"
              letterSpacing="0.01em"
              textAlign="left"
              margin="5px 10px 0px 10px"
            >
              {item.price}
            </Typography>
          </Box>
        );
      })}
    </>
  );
}
