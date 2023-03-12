import { Box, Container } from "@mui/system";
import limaRoll from "../../resources/menu/limaRoll.svg";
import bluffinTuna from "../../resources/menu/bluffinTuna.svg";
import burger from "../../resources/menu/burger.svg";
import kayoNoodles from "../../resources/menu/limaRoll.svg";
import salad from "../../resources/menu/salad.svg";
import arrowLeft from "../../resources/arrowLeft.svg";
import arrowRight from "../../resources/arrowRight.svg";
import MenuCarousal from "@/components/MenuCarousal/MenuCarousal";
import { Typography } from "@mui/material";
import Button from "@/components/Button/Button";

export default function Menu() {
  return (
    <Box
      borderTop="2px solid #F3F2F2"
      sx={{ backgroundColor: "#FCFCFC" }}
      paddingBottom="30px"
    >
      <Container maxWidth="xl">
        <Box
          marginTop="30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            fontSize="24px"
            fontFamily="Gilroy"
            fontWeight="600"
            letterSpacing="0.01em"
            lineHeight="35px"
            textAlign="left"
          >
            Menu
          </Typography>
          <Box display="flex" alignItems="center">
            <Box marginLeft="20px">
              <Button
                onClick={() => {}}
                text="See Menu"
                variant="primary"
                justifyContent="space-between"
              />
            </Box>
            <Box marginLeft="20px">
              <Button
                icon={arrowLeft}
                onClick={() => {}}
                variant="primary"
                justifyContent="space-between"
              />
            </Box>
            <Box marginLeft="20px">
              <Button
                icon={arrowRight}
                onClick={() => {}}
                variant="primary"
                justifyContent="space-between"
              />
            </Box>
          </Box>
        </Box>
        <Box display="flex" marginTop="30px">
          <MenuCarousal menu={MenuItems} />
        </Box>
      </Container>
    </Box>
  );
}

const MenuItems = [
  {
    image: limaRoll,
    title: "Lima Roll",
    description: "Description about dish, ingredient and other goes here.",
    price: "₺55",
  },
  {
    image: bluffinTuna,
    title: "Bluffin Tuna",
    description: "Description about dish, ingredient and other goes here.",
    price: "₺55",
  },
  {
    image: burger,
    title: "Burger",
    description: "Description about dish, ingredient and other goes here.",
    price: "₺55",
  },
  {
    image: kayoNoodles,
    title: "Kayo Noodles",
    description: "Description about dish, ingredient and other goes here.",
    price: "₺55",
  },
  //   {
  //     image: salad,
  //     title: "Salad",
  //     description: "Description about dish, ingredient and other goes here.",
  //     price: "₺55",
  //   },
];
