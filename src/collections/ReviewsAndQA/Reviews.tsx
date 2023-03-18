import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { Box, Typography } from "@mui/material";
import CommentsManager from "./CommentsManager";
import { ReviewPanel } from "./ReviewPanel";

export default function Reviews() {
  return (
    <ResponsiveContainer>
      <Box
        display="flex"
        justifyContent="space-between"
        marginTop="30px"
        marginBottom="30px"
      >
        <Box width="35%" display="flex" flexDirection="column">
          <ReviewPanel />
          <Box
            marginTop="30px"
            borderRadius="10px"
            sx={{ backgroundColor: "#E8EFE6", padding: "50px" }}
            width="90%"
          >
            <Typography
              fontFamily="Gilroy-medium"
              fontSize="24px"
              fontWeight="500"
              lineHeight="36px"
              letterSpacing="0.01em"
              textAlign="center"
              color="#242429"
            >
              Travelling, It leaves you speechless hen turns you into story
              teller
            </Typography>
            <Typography
              fontFamily="Gilroy-medium"
              fontSize="20px"
              fontWeight="500"
              lineHeight="30px"
              letterSpacing="0.01em"
              textAlign="center"
              color="#424244"
            >
              -Ibn Battuta
            </Typography>
          </Box>
        </Box>
        <Box width="55%" display="flex" justifyContent="center">
          <CommentsManager />
        </Box>
      </Box>
    </ResponsiveContainer>
  );
}
