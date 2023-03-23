import * as React from "react";
import List from "@mui/material/List";
import {
  Divider,
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PRIMARY_COLOR } from "../../utils/constants/colors";

export default function MobileMenu(props) {
  const { openMobileMenu, setOpenMobileMenu } = props;
  const hundelCloseMenu = () => {
    setOpenMobileMenu(false);
  };

  const dataList = [
    { text: "Home", path: "/" },
    { text: "Movies", path: "/movies" },
    { text: "About us", path: "/about" },
    { text: "Privacy and Terms", path: "/about" },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 310 }}
      role="presentation"
      onKeyDown={hundelCloseMenu}
    >
      <List>
        {dataList.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton
              onClick={() => {
                hundelCloseMenu();
              }}
            >
              <ListItemText
                primary={item?.text}
                color="primary"
                sx={{
                  padding: "0 10px 0 0",
                  color: PRIMARY_COLOR,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor={"left"}
        open={openMobileMenu}
        onClose={hundelCloseMenu}
        sx={{
          backdropFilter: "blur(5px)",
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              m: 2,
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <IconButton onClick={hundelCloseMenu}>
              <CloseIcon color="primary" />
            </IconButton>
          </Box>
        </Box>
        <Divider />
        {list("right")}
      </Drawer>
    </div>
  );
}
