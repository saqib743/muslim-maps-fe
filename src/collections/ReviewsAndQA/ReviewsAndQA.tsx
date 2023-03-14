import { Tab, Tabs, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import PropTypes from "prop-types";
import NavigationBar from "./NavigationBar";
import Reviews from "./Reviews";

export default function ReviewsAndQA() {
  const [value, setValue] = React.useState(0);

  const handleChange = (value: number) => {
    setValue(value);
  };

  return (
    <>
      <NavigationBar handleChange={handleChange} />
      {value === 0 && <Reviews />}
    </>
  );
}
