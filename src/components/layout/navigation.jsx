import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Tooltip,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import MobileMenu from "./mobile-menu";
import { NavItem } from "./nav-item";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Header } from "./header";

const styles = {
  navigation: {
    display: "flex",
    justifyContent: {
      xs: "space-between",
      md: "flex-end",
    },
    alignItems: "center",
    width: "100%",
  },
  menuIcon: {
    display: {
      xs: "flex",
      md: "none",
    },
    alignItems: "center",
  },
  navItemsSection: {
    display: {
      xs: "none",
      md: "flex",
      flexGrow: 1,
    },
  },
  navDetails: {
    display: {
      xs: "none",
      md: "block",
    },
  },
  favoriteIcon: {
    p: 0,
    display: { xs: "none", md: "block" },
    mt: 0.6,
    ml: 1,
  },
};
export const Navigation = (props) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleOpenNavMenu = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      setOpenMobileMenu(false);
    }
    setOpenMobileMenu(true);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ height: 63, bgcolor: "white", boxShadow: 1 }}>
      <Container maxWidth="xl">
        <MobileMenu
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
        />
        <Toolbar disableGutters sx={{ boxShadow: "none" }}>
          <Box
            sx={styles.navigation}
          >
            <Box
              sx={styles.menuIcon}
            >
              <IconButton
                size="large"
                color="primary"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Box>
            <Box
              sx={styles.navItemsSection}
            >
              <NavItem title={"Home"} href={"/"} data-testid="home" />
              <NavItem title={"Movies"} href={"/movies"} data-testid="movies" />
              <NavItem title={"About us"} href={"/about"} data-testid="about" />
              <NavItem
                title={"Privacy and Terms"}
                href={"/terms"}
                data-testid="terms"
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={styles.navDetails}
              ></Box>
              <Badge badgeContent={12} color="primary">
                <IconButton size="large" color="primary" sx={{ p: 0 }}>
                  <NotificationsIcon
                    color="primary"
                    sx={{ width: "20px", height: "20px" }}
                  />
                </IconButton>
              </Badge>

              <Tooltip title="Open Favorite">
                <IconButton
                  sx={styles.favoriteIcon}
                >
                  <FavoriteBorderIcon
                    color="primary"
                    sx={{ width: "24px", height: "20px" }}
                  />
                </IconButton>
              </Tooltip>
              <Box>
                <Menu
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
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography textAlign="center">{"My Profile"}</Typography>
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography textAlign="center">
                      {"notifications"}
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography textAlign="center">{"Log out"}</Typography>
                  </MenuItem>
                </Menu>
              </Box>
              <Tooltip title="Open profile">
                <IconButton sx={{ p: 0 }}>
                  <PersonOutlineIcon
                    color="primary"
                    sx={{ width: "24px", height: "24px", ml: -1 }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Toolbar>
      </Container>
      <Box>
        <Header />
      </Box>
    </AppBar>
  );
};
