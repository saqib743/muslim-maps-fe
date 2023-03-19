import { ButtonProps } from "@/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Button({
  variant,
  icon,
  iconAlt,
  text,
  onClick,
  width,
  justifyContent,
  lowPadding,
  maxWidth,
  marginRight,
  iconReverse,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const styles = {
    primary: {
      color: "#323232",
      colorAlt: "white",
      border: "1px solid #F0F0F0",
      backgroundColor: "white",
      backgroundColorAlt: "#323232",
    },
    green: {
      color: "white",
      colorAlt: "#1E692E",
      backgroundColor: "#1E692E",
      backgroundColorAlt: "white",
      border: "1px solid #1E692E",
    },
    grey: {
      color: "black",
      colorAlt: "#F0F0F0",
      backgroundColor: "#F0F0F0",
      backgroundColorAlt: "black",
      border: "1px solid #F0F0F0",
    },
    black: {
      color: "white",
      colorAlt: "#010F07",
      backgroundColor: "#010F07",
      backgroundColorAlt: "white",
      border: "1px solid #010F07",
    },
  };
  return (
    <Box
      sx={{
        backgroundColor: styles[variant].backgroundColor,
        ":hover": {
          cursor: "pointer",
          backgroundColor: styles[variant].backgroundColorAlt,
          color: styles[variant].colorAlt,
        },
      }}
      onClick={onClick}
      borderRadius="100px"
      border={styles[variant].border}
      color={styles[variant].color}
      display="flex"
      justifyContent={justifyContent}
      alignItems="center"
      width={width ? width : maxWidth ? "100%" : "fit-content"}
      padding={lowPadding ? "2px 10px 2px 10px" : "12px 20px 12px 20px"}
      height={lowPadding ? "" : "50px"}
      marginRight={marginRight}
      flexDirection={iconReverse !== undefined ? "row-reverse" : "initial"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && iconAlt && (
        <Image src={!isHovered ? icon : iconAlt} alt="icon" />
      )}
      <Typography
        fontFamily="Gilroy-medium"
        fontSize="16px"
        fontWeight="500"
        lineHeight="26px"
        letterSpacing="0.01em"
        textAlign="left"
        marginRight={iconReverse && icon && "10px"}
        marginLeft={text?.length && icon && "10px"}
      >
        {text}
      </Typography>
    </Box>
  );
}
