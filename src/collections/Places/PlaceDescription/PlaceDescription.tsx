import { Rating, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import verify from "../../../resources/verify.svg";
import Image from "next/image";
import Button from "@/components/Button/Button";
import favIcon from "../../../resources/favIcon.svg";
import favIconAlt from "../../../resources/favIconAlt.svg";
import share from "../../../resources/share.svg";
import shareAlt from "../../../resources/shareAlt.svg";
import dot from "../../../resources/dot.svg";
import pin from "../../../resources/pin.svg";
import dropArrow from "../../../resources/dropArrow.svg";
import away from "../../../resources/away.svg";
import { calculateResponsiveWidths } from "@/utils";

export default function PlaceDescription() {
  let screenSize = "";
  const theme = useTheme();

  if (useMediaQuery(theme.breakpoints.up("xs"))) screenSize = "xs";
  if (useMediaQuery(theme.breakpoints.up("sm"))) screenSize = "sm";
  if (useMediaQuery(theme.breakpoints.up("md"))) screenSize = "md";
  if (useMediaQuery(theme.breakpoints.up("lg"))) screenSize = "lg";
  if (useMediaQuery("(min-width:1530px)")) screenSize = "xl";
  if (useMediaQuery("(min-width:1920px)")) screenSize = "xxl";
  return (
    <Box marginTop="20px" marginBottom="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop="20px"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            fontSize="48px"
            fontWeight="700"
            fontFamily="Gilroy-bold"
            lineHeight="58px"
            letterSpacing="0.01em"
            textAlign="left"
            color="#101828"
            marginRight="8px"
          >
            The Urban Chocolatier
          </Typography>
          <Image src={verify} alt="verify" />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Button
              icon={favIcon}
              iconAlt={favIconAlt}
              onClick={() => {}}
              text="Like"
              variant="primary"
              width="105px"
              justifyContent="space-between"
            />
          </Box>
          <Box marginLeft="20px">
            <Button
              icon={share}
              iconAlt={shareAlt}
              onClick={() => {}}
              text="Share"
              variant="primary"
              width="115px"
              justifyContent="space-between"
            />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        {...calculateResponsiveWidths("placeDescriptions", screenSize)}
        marginTop="20px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginRight="10px"
        >
          <Rating sx={{ color: "#1E692E" }} value={4} />
          <Typography
            fontSize="16px"
            fontFamily="Gilroy-medium"
            fontWeight="500"
            marginLeft="10px"
            lineHeight="26px"
            letterSpacing="0.01em"
          >
            4.0
          </Typography>
          <Typography
            fontSize="16px"
            fontFamily="Gilroy-medium"
            fontWeight="500"
            lineHeight="26px"
            letterSpacing="0.01em"
            color="#646467"
            marginLeft="2px"
          >
            {" "}
            (202 Reviews)
          </Typography>
        </Box>

        <Image src={dot} alt="dot" />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginRight="10px"
          width="130px"
        >
          <Image src={pin} alt="pin" />
          <Typography
            fontSize="16px"
            fontFamily="Gilroy-medium"
            fontWeight="500"
            lineHeight="26px"
            letterSpacing="0.01em"
          >
            Istanbul, Turkey
          </Typography>
        </Box>
        <Image src={dot} alt="dot" />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginRight="10px"
        >
          <Button
            onClick={() => {}}
            text="Open Now"
            variant="green"
            justifyContent="space-between"
            lowPadding
          />
          <Typography
            fontSize="16px"
            fontFamily="Gilroy-medium"
            fontWeight="500"
            marginLeft="10px"
            marginRight="10px"
            letterSpacing="0.01em"
            lineHeight="26px"
          >
            8:00 AM - 9:30 AM
          </Typography>
          <Image src={dropArrow} alt="drop" />
        </Box>
        <Image src={dot} alt="dot" />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginRight="10px"
        >
          <Typography
            fontSize="16px"
            fontFamily="Gilroy-medium"
            fontWeight="500"
            marginLeft="10px"
            marginRight="10px"
            letterSpacing="0.01em"
            lineHeight="26px"
          >
            Call
          </Typography>
          <Image src={away} alt="away" />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" marginTop="20px">
        <Box marginRight="10px">
          <Typography
            fontSize="20px"
            fontFamily="Gilroy-medium"
            fontWeight="500"
            letterSpacing="0.01em"
            lineHeight="30px"
            marginLeft="10px"
            marginRight="10px"
            color="#010F07"
          >
            Eat in Istanbul Turkey
          </Typography>
        </Box>
        <Box marginRight="10px">
          <Button
            onClick={() => {}}
            text="Desert"
            variant="grey"
            justifyContent="space-between"
            lowPadding
          />
        </Box>
        <Box marginRight="10px">
          <Button
            onClick={() => {}}
            text="Cake"
            variant="grey"
            justifyContent="space-between"
            lowPadding
          />
        </Box>
        <Box marginRight="10px">
          <Button
            onClick={() => {}}
            text="Coffee"
            variant="grey"
            justifyContent="space-between"
            lowPadding
          />
        </Box>
      </Box>
    </Box>
  );
}
