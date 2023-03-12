import { Box, Container } from "@mui/system";
import AttractionsNearBy from "./AttractionsNearBy";
import RestaurantsNearBy from "./RestaurantsNearBy";
import SiteInformation from "./SiteInformation";

export default function LocationAndSiteInformation() {
  return (
    <Box borderTop="2px solid #F3F2F2" paddingBottom="30px">
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="space-between">
          <Box width="60%">
            <RestaurantsNearBy />
            <AttractionsNearBy />
          </Box>
          <Box>
            <SiteInformation />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
