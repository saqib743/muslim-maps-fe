import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../resources/logo.svg";
import country from "../../resources/country.svg";
import favourite from "../../resources/favourite.svg";
import notifications from "../../resources/notifications.svg";
import { SearchBar } from "@/components";
import Image from "next/image";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";

import { useMediaQuery, useTheme } from "@mui/material";
import { calculateResponsiveMargins } from "@/utils";

const pages = [
  "Home",
  "Explore",
  "Maps",
  "Player tools",
  "Submit your listing",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  let screenSize = "";
  const theme = useTheme();

  if (useMediaQuery(theme.breakpoints.up("xs"))) screenSize = "xs";
  if (useMediaQuery(theme.breakpoints.up("sm"))) screenSize = "sm";
  if (useMediaQuery(theme.breakpoints.up("md"))) screenSize = "md";
  if (useMediaQuery(theme.breakpoints.up("lg"))) screenSize = "lg";
  if (useMediaQuery("(min-width:1530px)")) screenSize = "xl";
  if (useMediaQuery("(min-width:1920px)")) screenSize = "xxl";

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "white",
        boxShadow: "none",
        borderBottom: "2px solid #F3F2F2",
        padding: "8px 0px 8px 0px",
      }}
    >
      <ResponsiveContainer>
        <Toolbar disableGutters>
          <Image src={logo} alt={"logo"} />

          <SearchBar />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  whiteSpace: "nowrap",
                }}
                style={{ color: "black" }}
              >
                <Typography
                  fontFamily="Gilroy-medium"
                  fontSize="14px"
                  lineHeight="26px"
                  letterSpacing="0.01em"
                  fontWeight="500"
                  {...calculateResponsiveMargins("navbar", screenSize)}
                >
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box display="flex">
              <Tooltip title="Country">
                <Box {...calculateResponsiveMargins("navbar", screenSize)}>
                  <Image src={country} alt="country" />
                </Box>
              </Tooltip>
              <Tooltip title="favourite">
                <Box {...calculateResponsiveMargins("navbar", screenSize)}>
                  {" "}
                  <Image src={favourite} alt="favourite" />
                </Box>
              </Tooltip>
              <Tooltip title="Notifications">
                <Box {...calculateResponsiveMargins("navbar", screenSize)}>
                  {" "}
                  <Image src={notifications} alt="notifications" />
                </Box>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{
                    p: 0,
                    ...calculateResponsiveMargins(
                      "navbar-settings",
                      screenSize
                    ),
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://i.ibb.co/CMk05LW/habibi.jpg"
                  />
                </IconButton>
              </Tooltip>
            </Box>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </ResponsiveContainer>
    </AppBar>
  );
}
export default ResponsiveAppBar;
