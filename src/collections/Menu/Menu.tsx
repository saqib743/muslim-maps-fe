import { Box } from "@mui/system";
import limaRoll from "../../resources/menu/limaRoll.svg";
import bluffinTuna from "../../resources/menu/bluffinTuna.svg";
import burger from "../../resources/menu/burger.svg";
import kayoNoodles from "../../resources/menu/limaRoll.svg";
import arrowLeft from "../../resources/arrowLeft.svg";
import arrowRight from "../../resources/arrowRight.svg";
import arrowLeftAlt from "../../resources/arrowLeftAlt.svg";
import arrowRightAlt from "../../resources/arrowRightAlt.svg";
import { Typography } from "@mui/material";
import Button from "@/components/Button/Button";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import Image from "next/image";
import { MutableRefObject, useRef } from "react";

export default function Menu() {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  const handleScrollLeft = () => {
    let scrollTarget = ref.current.scrollLeft - 325;
    if (scrollTarget < 0) scrollTarget = 0;
    const step = () => {
      if (ref.current.scrollLeft > scrollTarget) {
        ref.current.scrollLeft -= 35;
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };
  const handleScrollRight = () => {
    let scrollTarget = ref.current.scrollLeft + 325;
    const step = () => {
      if (ref.current.scrollLeft < scrollTarget) {
        ref.current.scrollLeft += 35;
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };
  return (
    <Box
      borderTop="2px solid #F3F2F2"
      sx={{ backgroundColor: "#FCFCFC" }}
      paddingBottom="30px"
    >
      <ResponsiveContainer>
        <>
          <Box
            marginTop="30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              fontSize="24px"
              fontFamily="Gilroy-semiBold"
              fontWeight="600"
              letterSpacing="0.01em"
              lineHeight="34.5px"
              textAlign="left"
              color="#010F07"
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
                  iconAlt={arrowLeftAlt}
                  onClick={() => handleScrollLeft()}
                  variant="primary"
                  justifyContent="space-between"
                />
              </Box>
              <Box marginLeft="20px">
                <Button
                  icon={arrowRight}
                  iconAlt={arrowRightAlt}
                  onClick={() => handleScrollRight()}
                  variant="primary"
                  justifyContent="space-between"
                />
              </Box>
            </Box>
          </Box>
        </>
      </ResponsiveContainer>
      <ResponsiveContainer noRightMargin>
        <Box display="flex" marginTop="30px">
          <Box
            width="100%"
            overflow="auto"
            sx={{
              "::-webkit-scrollbar": {
                height: "5px",
              },
              " ::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 5px #D5F4DC",
                borderRadius: "10px",
              },
              "::-webkit-scrollbar-thumb": {
                background: "#91D29F",
                borderRadius: "5px",
              },
              "::-webkit-scrollbar-thumb:hover": {
                background: "#1E692E",
              },
            }}
            display="flex"
            ref={ref}
          >
            {menu.map((item, key) => {
              return (
                <Box
                  border="1px solid #F0F0F0"
                  padding="5px"
                  borderRadius="10px"
                  key={key}
                  marginRight="20px"
                  width="min-content"
                >
                  <Image src={item.image} alt={item.title} />
                  <Typography
                    fontSize="20px"
                    fontFamily="Gilroy-semiBold"
                    fontWeight="600"
                    lineHeight="30px"
                    letterSpacing="0.01em"
                    textAlign="left"
                    margin="5px 10px 0px 10px"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    fontSize="14px"
                    fontFamily="Gilroy"
                    fontWeight="400"
                    lineHeight="24px"
                    letterSpacing="0.01em"
                    textAlign="left"
                    margin="5px 10px 0px 10px"
                    color="#646467"
                  >
                    {item.description}
                  </Typography>

                  <Typography
                    fontSize="20px"
                    fontFamily="Gilroy-semiBold"
                    fontWeight="600"
                    lineHeight="30px"
                    letterSpacing="0.01em"
                    textAlign="left"
                    margin="5px 10px 0px 10px"
                  >
                    {item.price}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </ResponsiveContainer>
    </Box>
  );
}

const menu = [
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
  {
    image: burger,
    title: "Burger",
    description: "Description about dish, ingredient and other goes here.",
    price: "₺55",
  },
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
    image: kayoNoodles,
    title: "Kayo Noodles",
    description: "Description about dish, ingredient and other goes here.",
    price: "₺55",
  },
  {
    image: limaRoll,
    title: "Lima Roll",
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
];
