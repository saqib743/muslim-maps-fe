import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { calculateResponsiveWidths } from "@/utils";
import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import AttractionsNearBy from "./AttractionsNearBy";
import RestaurantsNearBy from "./RestaurantsNearBy";
import SiteInformation from "./SiteInformation";

export default function LocationAndSiteInformation() {
  let screenSize = "";
  const theme = useTheme();

  if (useMediaQuery(theme.breakpoints.up("xs"))) screenSize = "xs";
  if (useMediaQuery(theme.breakpoints.up("sm"))) screenSize = "sm";
  if (useMediaQuery(theme.breakpoints.up("md"))) screenSize = "md";
  if (useMediaQuery(theme.breakpoints.up("lg"))) screenSize = "lg";
  if (useMediaQuery("(min-width:1530px)")) screenSize = "xl";
  if (useMediaQuery("(min-width:1920px)")) screenSize = "xxl";
  return (
    <Box borderTop="2px solid #F3F2F2" paddingBottom="30px">
      <ResponsiveContainer>
        <Box display="flex" justifyContent="space-between">
          <Box
            {...calculateResponsiveWidths(
              "restaurantsAndAttractions",
              screenSize
            )}
          >
            <RestaurantsNearBy />
            <AttractionsNearBy />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            {...calculateResponsiveWidths("siteInformation", screenSize)}
          >
            <SiteInformation />
          </Box>
        </Box>
      </ResponsiveContainer>
    </Box>
  );
}
