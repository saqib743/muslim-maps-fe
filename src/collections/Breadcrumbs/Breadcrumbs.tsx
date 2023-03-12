import * as React from "react";
import BreadcrumbsBase from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
export default function Breadcrumbs() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      <Typography
        fontSize="16px"
        lineHeight="26px"
        fontWeight="500"
        letterSpacing="0.01em"
        fontFamily="Gilroy-medium"
        color="#646467"
      >
        Home
      </Typography>
    </Link>,
    <Link underline="hover" key="2" color="#646467" href="/">
      <Typography
        fontSize="16px"
        lineHeight="26px"
        fontWeight="500"
        letterSpacing="0.01em"
        fontFamily="Gilroy-medium"
        color="#646467"
      >
        {" "}
        Places
      </Typography>
    </Link>,
    <Link underline="hover" key="3" color="#646467" href="/">
      <Typography
        fontSize="16px"
        lineHeight="26px"
        fontWeight="500"
        letterSpacing="0.01em"
        fontFamily="Gilroy-medium"
        color="#646467"
      >
        {" "}
        Place details
      </Typography>
    </Link>,
    <Typography key="4">
      <Typography
        fontSize="16px"
        lineHeight="26px"
        fontWeight="500"
        letterSpacing="0.01em"
        fontFamily="Gilroy-medium"
        color="#165B00"
      >
        Hagia Sophia Mosque
      </Typography>
    </Typography>,
  ];
  return (
    <Box marginBottom="20px" marginTop="20px">
      <Container maxWidth="xl">
        <BreadcrumbsBase
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </BreadcrumbsBase>
      </Container>
    </Box>
  );
}
