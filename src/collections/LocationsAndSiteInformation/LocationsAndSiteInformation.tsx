import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { Box } from "@mui/system";
import AttractionsNearBy from "./AttractionsNearBy";
import RestaurantsNearBy from "./RestaurantsNearBy";
import SiteInformation from "./SiteInformation";

export default function LocationAndSiteInformation() {
  return (
    <Box borderTop="2px solid #F3F2F2" paddingBottom="30px">
      <ResponsiveContainer>
        <Box display="flex" justifyContent="space-between">
          <Box width="65%">
            <RestaurantsNearBy />
            <AttractionsNearBy />
          </Box>
          <Box width="30%">
            <SiteInformation />
          </Box>
        </Box>
      </ResponsiveContainer>
    </Box>
  );
}
