import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { ReviewPanel } from "./ReviewPanel";

export default function Reviews() {
  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        justifyContent="space-between"
        marginTop="30px"
        marginBottom="30px"
      >
        <Box width="35%" display="flex" justifyContent="center">
          <ReviewPanel />
        </Box>
        <Box width="55%" display="flex" justifyContent="center">
          R
        </Box>
      </Box>
    </Container>
  );
}
