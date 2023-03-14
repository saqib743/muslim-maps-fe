import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Radio,
  Rating,
  Typography,
} from "@mui/material";
import TravelerRatings from "./TravellerRatings";
import TravellerTypes from "./TravellerTypes";

export function ReviewPanel() {
  return (
    <Box border="1px solid #F0F0F0" borderRadius="10px" width="90%">
      <Box
        sx={{ backgroundColor: "#F0F0F060" }}
        borderRadius="10px"
        padding="20px"
      >
        <Typography
          fontFamily="Gilroy-semiBold"
          fontSize="90px"
          fontWeight="600"
          lineHeight="107px"
          letterSpacing="0.01em"
          textAlign="left"
          color="#171725"
        >
          4.8
        </Typography>
        <Box display="flex" alignItems="center">
          <Rating value={4} />
          <Box marginLeft="10px">
            <Typography
              fontFamily="Gilroy-bold"
              fontSize="20px"
              fontWeight="700"
              lineHeight="27px"
              letterSpacing="0.01em"
              textAlign="left"
              color="#242429"
            >
              1796 reviews
            </Typography>
          </Box>
        </Box>
      </Box>
      <TravelerRatings />
      <Divider />
      <TravellerTypes />
    </Box>
  );
}
