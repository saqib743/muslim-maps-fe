import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

export default function TravellerTypes() {
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
        Traveller type
      </Typography>{" "}
      {travellerTypes.map((rating, key) => {
        return (
          <Box display="flex" alignItems="center" key={key} marginTop="5px">
            <Box display="flex" alignItems="center">
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
          </Box>
        );
      })}{" "}
    </Box>
  );
}

const travellerTypes = [
  { name: "Families" },
  { name: "Couples" },
  { name: "Solo (Brothers)" },
  { name: "Solo (Sisters)" },

  { name: "Business" },

  { name: "Friends" },
];
