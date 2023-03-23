import { Box, Typography, CardMedia } from "@mui/material";

export const NoDataFound = (props) => {
  const styles = {
    noDataFoundConainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      height: "70vh",
      gap: 2,
    },
    noDataIcon: {
      width: "93.88px",
      height: "103px",
    },
    nodataText: {
      fontSize: "20px",
      color: "#4c4c4c",
    },
  };
  return (
    <Box
      sx={styles.noDataFoundConainer}
    >
      <CardMedia
        component="img"
        src="/images/no-data.webp"
        sx={styles.noDataIcon}
      />

      <Typography
        sx={styles.nodataText}
      >
        {"There is no data found yet"}
      </Typography>
    </Box>
  );
};
