import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { PRIMARY_COLOR } from "../../utils/constants/colors";


export const Loader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: PRIMARY_COLOR,
      }}
    >
      <CircularProgress sx={{ color: "white" }} />
    </Box>
  );
};
