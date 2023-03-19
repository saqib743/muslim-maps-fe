import { ResponsiveContainerProps } from "@/types";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export default function ResponsiveContainer({
  noRightMargin = false,
  children,
}: ResponsiveContainerProps) {
  let screenSize = "";
  const theme = useTheme();

  if (useMediaQuery(theme.breakpoints.up("xs"))) screenSize = "xs";
  if (useMediaQuery(theme.breakpoints.up("sm"))) screenSize = "sm";
  if (useMediaQuery(theme.breakpoints.up("md"))) screenSize = "md";
  if (useMediaQuery(theme.breakpoints.up("lg"))) screenSize = "lg";
  if (useMediaQuery("(min-width:1530px)")) screenSize = "xl";
  if (useMediaQuery("(min-width:1920px)")) screenSize = "xxl";

  const getMargins = () => {
    switch (screenSize) {
      case "md": {
        return {
          marginLeft: "15px",
          marginRight: !noRightMargin ? "15px" : "0px",
        };
      }
      case "lg": {
        return {
          marginLeft: "20px",
          marginRight: !noRightMargin ? "20px" : "0px",
        };
      }
      case "xl": {
        return {
          marginLeft: "25px",
          marginRight: !noRightMargin ? "25px" : "0px",
        };
      }
      case "xxl": {
        return {
          marginLeft: "200px",
          marginRight: !noRightMargin ? "200px" : "0px",
        };
      }
      default: {
        return {
          marginLeft: "0px",
          marginRight: !noRightMargin ? "0px" : "0px",
        };
      }
    }
  };

  return <Box sx={getMargins}>{children}</Box>;
}
