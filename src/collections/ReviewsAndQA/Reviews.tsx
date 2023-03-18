import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { calculateResponsiveWidths } from "@/utils";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import CommentsManager from "./CommentsManager";
import { ReviewPanel } from "./ReviewPanel";

export default function Reviews() {
  let screenSize = "";
  const theme = useTheme();

  if (useMediaQuery(theme.breakpoints.up("xs"))) screenSize = "xs";
  if (useMediaQuery(theme.breakpoints.up("sm"))) screenSize = "sm";
  if (useMediaQuery(theme.breakpoints.up("md"))) screenSize = "md";
  if (useMediaQuery(theme.breakpoints.up("lg"))) screenSize = "lg";
  if (useMediaQuery("(min-width:1530px)")) screenSize = "xl";
  if (useMediaQuery("(min-width:1920px)")) screenSize = "xxl";
  return (
    <ResponsiveContainer>
      <Box
        display="flex"
        justifyContent="space-between"
        marginTop="30px"
        marginBottom="30px"
      >
        <Box
          {...calculateResponsiveWidths("reviewRating", screenSize)}
          display="flex"
          flexDirection="column"
        >
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
        <Box
          {...calculateResponsiveWidths("reviewComments", screenSize)}
          display="flex"
          justifyContent="center"
        >
          <CommentsManager />
        </Box>
      </Box>
    </ResponsiveContainer>
  );
}
