import { Box, Radio, Rating, Typography } from "@mui/material";

export function ReviewPanel() {
  return (
    <Box border="1px solid #F0F0F0" borderRadius="10px" width="90%">
      <Box
        sx={{ backgroundColor: "#F0F0F0" }}
        borderRadius="10px"
        padding="15px"
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
      <Box padding="15px" marginTop="10px">
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
        </Typography>

        {/* <Radio>
          <Typography
            fontFamily="Gilroy"
            fontSize="14px"
            fontWeight="400"
            lineHeight="24px"
            letterSpacing="0.01em"
            textAlign="left"
            color="#010F07"
          >
            Traveller rating
          </Typography>
        </Radio> */}
      </Box>
    </Box>
  );
}
