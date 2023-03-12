import { Box, Typography } from "@mui/material";
import Image from "next/image";
import maps from "../../resources/maps.svg";
import computer from "../../resources/computer.svg";
import facebook from "../../resources/facebook.svg";
import instagram from "../../resources/instagram.svg";
import linkedin from "../../resources/linkedin.svg";
import mail from "../../resources/mail.svg";
import reciever from "../../resources/reciever.svg";
import twitter from "../../resources/twitter.svg";
import pin from "../../resources/pin.svg";
import navigation from "../../resources/navigation.svg";
import Button from "@/components/Button/Button";

export default function SiteInformation() {
  return (
    <Box
      border="1px solid #F0F0F0"
      padding="30px 15px 30px 15px"
      borderRadius="10px"
      width="min-content"
      marginTop="30px"
    >
      <Typography
        fontFamily="Gilroy-semiBold"
        fontWeight="600"
        fontSize="20px"
        lineHeight="30px"
        letterSpacing="0.01em"
        marginBottom="20px"
        color="#010F07"
      >
        Site Information
      </Typography>
      <Box marginBottom="20px">
        <Image src={maps} alt="maps" />
      </Box>
      <Box marginBottom="20px">
        <Button
          icon={navigation}
          onClick={() => {}}
          variant="green"
          text="Get Direction"
          justifyContent="center"
          maxWidth
        />
      </Box>
      <Box display="flex" alignItems="center" marginBottom="20px">
        <Image src={pin} alt="pin" />
        <Typography
          fontFamily="Gilroy"
          color="#010F07"
          fontWeight="400"
          fontSize="16px"
          lineHeight="26px"
          letterSpacing="0.01em"
          marginLeft="10px"
        >
          Sultan Ahmet, Ayasofya Meydanı No:1, 34122 Fatih/İstanbul, Turkey
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" marginBottom="20px">
        <Image src={reciever} alt="pin" />
        <Typography
          fontFamily="Gilroy"
          color="#010F07"
          fontWeight="400"
          fontSize="16px"
          lineHeight="26px"
          letterSpacing="0.01em"
          marginLeft="10px"
        >
          +90 212 522 17 50
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" marginBottom="20px">
        <Image src={mail} alt="pin" />
        <Typography
          fontFamily="Gilroy"
          color="#010F07"
          fontWeight="400"
          fontSize="16px"
          lineHeight="26px"
          letterSpacing="0.01em"
          marginLeft="10px"
        >
          ayasofyacamii@gov.tr
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" marginBottom="20px">
        <Image src={computer} alt="pin" />
        <Typography
          fontFamily="Gilroy"
          color="#010F07"
          fontWeight="400"
          fontSize="16px"
          lineHeight="26px"
          letterSpacing="0.01em"
          marginLeft="10px"
        >
          www.ayasofyacamii.gov.tr
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" marginBottom="20px">
        <Box marginRight="20px">
          <Image src={facebook} alt="pin" />
        </Box>
        <Box marginRight="20px">
          <Image src={twitter} alt="pin" />
        </Box>
        <Box marginRight="20px">
          <Image src={instagram} alt="pin" />
        </Box>
        <Box marginRight="20px">
          <Image src={linkedin} alt="pin" />
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Box width="50%" padding="5px">
          <Button
            onClick={() => {}}
            variant="green"
            text="Leave a review"
            justifyContent="center"
            maxWidth
          />
        </Box>
        <Box width="50%" padding="5px">
          {" "}
          <Button
            onClick={() => {}}
            variant="black"
            text="Add Photos"
            justifyContent="center"
            maxWidth
          />
        </Box>
      </Box>
    </Box>
  );
}
