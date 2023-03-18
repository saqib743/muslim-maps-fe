import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import appStore from "../../resources/appStore.svg";
import googlePlay from "../../resources/googlePlay.svg";
import logo from "../../resources/logo.svg";

export default function BottomNavigation() {
  return (
    <Box
      borderTop="2px solid #F3F2F2"
      sx={{ backgroundColor: "#FCFCFC" }}
      paddingTop="120px"
      paddingBottom="120px"
    >
      <ResponsiveContainer>
        <Box display="flex">
          <>
            <Box
              width="20%"
              display="flex"
              flexDirection="column"
              alignItems="initial"
              marginLeft="12px"
            >
              <Image
                src={logo}
                alt="logo"
                style={{ height: "50px", width: "120px" }}
              />
            </Box>
            {bottomNavigationData.map((navItem, key) => {
              return (
                <Box
                  width="20%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  key={key}
                >
                  <Box>
                    <Typography
                      fontFamily="Gilroy-semibold"
                      fontWeight="600"
                      fontSize="20px"
                      lineHeight="30px"
                      letterSpacing="0.01em"
                      marginBottom="20px"
                    >
                      {navItem.title}
                    </Typography>
                    {navItem.links.map((link, key) => {
                      return (
                        <>
                          <Typography
                            fontFamily="Gilroy"
                            fontWeight="400"
                            fontSize="16px"
                            lineHeight="26px"
                            letterSpacing="0.01em"
                            key={key}
                            marginTop="15px"
                            textAlign="left"
                          >
                            {link.text}
                          </Typography>
                        </>
                      );
                    })}
                  </Box>
                  <Box>
                    {navItem.icons?.map((icons, key) => {
                      return (
                        <Box
                          key={key}
                          marginBottom={
                            navItem.icons.length === key - 1 ? "10px" : ""
                          }
                        >
                          <Image src={icons.icon} alt="icon" />
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}
          </>
        </Box>
      </ResponsiveContainer>
    </Box>
  );
}

const bottomNavigationData = [
  {
    title: "About",
    links: [
      { text: "About Muslim Maps" },
      { text: "How it works" },
      { text: "Careers" },
      { text: "Press" },
      { text: "Blog" },
      { text: "Forum" },
    ],
  },
  {
    title: "Partner with us",
    links: [
      { text: "Partnership programs" },
      { text: "Affiliate program" },
      { text: "Connectivity partners" },
      { text: "Promotions and events" },
      { text: "Integrations" },
      { text: "Community" },
      { text: "Loyalty program" },
    ],
  },
  {
    title: "Support",
    links: [
      { text: "Help Center" },
      { text: "Contact us" },
      { text: "Privacy policy" },
      { text: "Privacy policy" },
      { text: "Trust and safety" },
      { text: "Accessibility" },
    ],
  },
  {
    title: "Get the app",
    links: [
      { text: "Muslim maps for Android" },
      { text: "Muslim maps for iOS" },
    ],
    icons: [
      {
        icon: appStore,
      },
      {
        icon: googlePlay,
      },
    ],
  },
];
