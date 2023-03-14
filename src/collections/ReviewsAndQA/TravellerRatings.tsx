import { Checkbox, FormControlLabel, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function TravelerRatings() {
  return (
    <Box padding="20px" marginTop="10px">
      <Typography
        fontFamily="Gilroy-semiBold"
        fontSize="16px"
        fontWeight="600"
        lineHeight="26px"
        letterSpacing="0.01em"
        textAlign="left"
        color="#010F07"
      >
        Traveller rating
      </Typography>{" "}
      {travelerRatings.map((rating, key) => {
        return (
          <Box display="flex" alignItems="center" key={key} marginTop="5px">
            <Box display="flex" alignItems="center" width="35%">
              <FormControlLabel
                control={<Checkbox />}
                label={rating.name}
                sx={{
                  color: "#010F07",
                  fontFamily: "Gilroy",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "0.01em",
                  textAlign: "left",
                }}
              />
            </Box>
            <Box display="flex" alignItems="center" width="40%">
              <Rating sx={{ color: "#1E692E" }} value={rating.rating} />{" "}
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              width="25px"
            >
              <Typography
                fontFamily="Gilroy-medium"
                fontSize="14px"
                fontWeight="500"
                lineHeight="26px"
                letterSpacing="0.01em"
                textAlign="right"
                color="#09080D"
              >
                {rating.count}
              </Typography>{" "}
            </Box>
          </Box>
        );
      })}{" "}
    </Box>
  );
}

const travelerRatings = [
  {
    name: "Excellent",
    rating: 5,
    count: 2610,
  },
  {
    name: "Very Good",
    rating: 4,
    count: 56,
  },
  {
    name: "Average",
    rating: 3,
    count: 3,
  },
  {
    name: "Poor",
    rating: 2,
    count: 2,
  },
  {
    name: "Terrible",
    rating: 1,
    count: 1,
  },
];
