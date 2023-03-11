import { ButtonProps } from "@/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Button({
  variant,
  icon,
  text,
  onClick,
  width,
  justifyContent,
  lowPadding,
}: ButtonProps) {
  const styles = {
    primary: {
      color: "#323232",
      border: "1px solid #F0F0F0",
      backgroundColor: "white",
    },
    green: {
      color: "white",
      backgroundColor: "green",
      border: "1px solid green",
    },
    grey: {
      color: "black",
      backgroundColor: "#F0F0F0",
      border: "1px solid #F0F0F0",
    },
  };
  return (
    <Box
      sx={{ backgroundColor: styles[variant].backgroundColor }}
      onClick={onClick}
      borderRadius="100px"
      border={styles[variant].border}
      color={styles[variant].color}
      display="flex"
      justifyContent={justifyContent}
      alignItems="center"
      width={width ? width : "fit-content"}
      padding={lowPadding ? "2px 10px 2px 10px" : "12px 20px 12px 20px"}
      height={lowPadding ? "" : "50px"}
    >
      {icon && <Image src={icon} alt="icon" />}
      <Typography
        fontFamily="Gilroy-light"
        fontSize="16px"
        fontWeight="500"
        lineHeight="26px"
        letterSpacing="0.01em"
        textAlign="left"
      >
        {text}
      </Typography>
    </Box>
  );
}
