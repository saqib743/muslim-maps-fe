import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import verify from "../../../resources/verify.svg";
import Image from "next/image";
import Button from "@/components/Button/Button";
import favIcon from "../../../resources/favIcon.svg";
import share from "../../../resources/share.svg";
import dot from "../../../resources/dot.svg";
import pin from "../../../resources/pin.svg";
import dropArrow from "../../../resources/dropArrow.svg";
import away from "../../../resources/away.svg";

export default function PlaceDescription() {
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
            fontFamily="Gilroy"
            lineHeight="58px"
            letterSpacing="0.01em"
            textAlign="left"
          >
            The Urban Chocolatier
          </Typography>
          <Image src={verify} alt="verify" />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Button
              icon={favIcon}
              onClick={() => {}}
              text="Save"
              variant="primary"
              width="105px"
              justifyContent="space-between"
            />
          </Box>
          <Box marginLeft="20px">
            <Button
              icon={share}
              onClick={() => {}}
              text="Share"
              variant="primary"
              width="105px"
              justifyContent="space-between"
            />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="60%"
        marginTop="20px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginRight="10px"
        >
          <Rating color="green" value={4} />
          <Typography
            fontSize="16px"
            fontFamily="Gilroy-light"
            fontWeight="500"
            marginLeft="10px"
          >
            4.0 (202 Reviews)
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
            fontFamily="Gilroy-light"
            fontWeight="500"
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
            fontFamily="Gilroy-light"
            fontWeight="500"
            marginLeft="10px"
            marginRight="10px"
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
            fontFamily="Gilroy-light"
            fontWeight="500"
            marginLeft="10px"
            marginRight="10px"
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
            fontFamily="Gilroy-light"
            fontWeight="700"
            marginLeft="10px"
            marginRight="10px"
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
