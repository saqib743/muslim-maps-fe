import { Tab, Tabs, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import PropTypes from "prop-types";
import Button from "@/components/Button/Button";
import { SearchBar } from "@/components";
import { NavigationBarProps } from "@/types";

export default function NavigationBar({ handleChange }: NavigationBarProps) {
  const [value, setValue] = React.useState(0);

  const handleToggle = (value: number) => {
    setValue(value);
    handleChange(value);
  };

  return (
    <Box borderTop="2px solid #F3F2F2" borderBottom="2px solid #F3F2F2">
      <Container maxWidth="xl">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop="30px"
        >
          <Box width="40%" display="flex">
            <Box onClick={() => handleToggle(0)} sx={{ cursor: "pointer" }}>
              <Typography
                fontFamily={value === 0 ? "Gilroy-semiBold" : "Gilroy"}
                color={value === 0 ? "#010F07" : "#424244"}
                fontWeight={value === 0 ? "600" : "400"}
                fontSize="24px"
                lineHeight="34.5px"
                letterSpacing="0.01em"
                marginRight="50px"
                sx={{
                  borderBottom: value === 0 ? "1px solid #010F07" : "none",
                  paddingBottom: "30px",
                }}
              >
                Reviews
              </Typography>
            </Box>
            <Box onClick={() => handleToggle(1)} sx={{ cursor: "pointer" }}>
              <Typography
                fontFamily={value === 1 ? "Gilroy-semiBold" : "Gilroy"}
                color={value === 0 ? "#010F07" : "#424244"}
                fontWeight={value === 1 ? "600" : "400"}
                fontSize="24px"
                lineHeight="34.5px"
                letterSpacing="0.01em"
                sx={{
                  borderBottom: value === 1 ? "1px solid #010F07" : "none",
                  paddingBottom: "30px",
                }}
              >
                Q & A
              </Typography>
            </Box>
          </Box>
          <Box width="60%" display="flex" alignItems="center">
            <Box position="relative" bottom="14px">
              <SearchBar backGroundColor="#EDEDEE60" />
            </Box>
            <Box
              position="relative"
              bottom="14px"
              width="web-kit-available"
              marginRight="10px"
            >
              <Button
                onClick={() => {}}
                variant="green"
                text="Leave a review"
                justifyContent="center"
                maxWidth
              />
            </Box>
            <Box position="relative" bottom="14px" width="web-kit-available">
              <Button
                onClick={() => {}}
                variant="black"
                text="Add Photos"
                justifyContent="center"
                maxWidth
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
