import { Box, Typography } from "@mui/material";
import wheelChair from "../../../resources/wheelChair.svg";
import wifi from "../../../resources/wifi.svg";
import carParking from "../../../resources/carParking.svg";
import clock from "../../../resources/clock.svg";
import Image from "next/image";
export default function About() {
  const data =
    "The Hagia Sophia Grand Mosque / Ayasofya-i Kebir Cami-i Şerifi, with its innovative architecture, rich history, religious significance and extraordinary characteristics has been fighting against time for centuries, was the largest Eastern Roman Church in Istanbul. Constructed three times in the same location, it is the world’s oldest and fastest-completed cathedral. With its breathtaking domes that look like hanging in the air, monolithic marble columns and unparalleled mosaics, is one of the wonders of world’s architecture history.";
  return (
    <Box marginTop="30px" marginBottom="30px">
      <Box>
        <Typography
          fontSize="24px"
          fontFamily="Gilroy-semiBold"
          fontWeight="600"
          letterSpacing="0.01em"
          lineHeight="34.5px"
          textAlign="left"
          marginTop="30px"
          color="#010F07"
        >
          About
        </Typography>
      </Box>
      <Box marginTop="10px">
        <Typography
          fontSize="16px"
          fontFamily="Gilroy"
          fontWeight="400"
          letterSpacing="0.01em"
          lineHeight="26px"
          textAlign="left"
          marginTop="30px"
          color="#242429"
        >
          {data}
        </Typography>
      </Box>
      <Box marginTop="10px">
        <Typography
          fontSize="16px"
          fontFamily="Gilroy-semiBold"
          fontWeight="600"
          letterSpacing="0.01em"
          lineHeight="26px"
          textAlign="left"
          marginTop="30px"
          color="#242429"
        >
          Read More
        </Typography>
      </Box>
      <Box display="flex" alignContent="center" marginTop="30px">
        <Box
          marginRight="20px"
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <Box marginRight="10px">
            <Image src={wheelChair} alt="wheelChair" />
          </Box>
          <Typography
            fontSize="16px"
            fontFamily="Gilroy-medium"
            color="#010F07"
            fontWeight="500"
            letterSpacing="0.01em"
            lineHeight="26px"
            textAlign="left"
          >
            Wheelchair Accessible
          </Typography>
        </Box>
        <Box
          marginRight="20px"
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <Box marginRight="10px">
            <Image src={wifi} alt="wifi" />
          </Box>
          <Typography
            fontSize="16px"
            fontFamily="Gilroy-medium"
            color="#010F07"
            fontWeight="500"
            letterSpacing="0.01em"
            lineHeight="26px"
            textAlign="left"
          >
            Free Wi-Fi
          </Typography>
        </Box>
        <Box
          marginRight="20px"
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <Box marginRight="10px">
            <Image src={carParking} alt="carParking" />
          </Box>
          <Typography
            fontSize="16px"
            fontFamily="Gilroy-medium"
            color="#010F07"
            fontWeight="500"
            letterSpacing="0.01em"
            lineHeight="26px"
            textAlign="left"
          >
            Car Parking
          </Typography>
        </Box>
        <Box
          marginRight="20px"
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <Box marginRight="10px">
            <Image src={clock} alt="clock" />
          </Box>
          <Typography
            fontSize="16px"
            fontFamily="Gilroy-medium"
            color="#010F07"
            fontWeight="500"
            letterSpacing="0.01em"
            lineHeight="26px"
            textAlign="left"
          >
            Open 24 Hours
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
