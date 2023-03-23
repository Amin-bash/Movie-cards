import React from "react";
import { Button, Typography } from "@mui/material";

const styles = {
  navItem: {
    wordWrap: "revert",
    px: 0,
    textAlign: "left",
    textTransform: "none",
    width: "150px",
  },
};
export const NavItem = (props) => {
  const { href, title, ...rest } = props;
  return (
    <>
      <Button sx={styles.navItem}>
        <Typography noWrap {...rest}>
          {title}
        </Typography>
      </Button>
    </>
  );
};
