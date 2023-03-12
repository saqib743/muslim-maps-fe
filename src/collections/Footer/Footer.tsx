import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import socialMediaStack from "../../resources/socialMediaStack.svg";
export default function Footer() {
  return (
    <Box borderTop="2px solid #F3F2F2" padding="0px 30px 0px">
      <Container maxWidth="xl">
        <Box
          marginTop="30px"
          marginBottom="30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image src={socialMediaStack} alt="social" />
          <Typography
            fontFamily="Gilroy"
            fontWeight="400"
            fontSize="18px"
            lineHeight="24.3px"
            textAlign="right"
          >
            {`© ${new Date().getFullYear()} Muslim maps incorporated`}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
