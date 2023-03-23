import { Box } from "@mui/material";
import { Navigation } from "./navigation";

const styles = {
  layoutContainer: {
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#fafafa",
  },
};
export const AppLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Navigation />
      <Box
        sx={styles.layoutContainer}
      >
        {children}
      </Box>
      {/* TODO add footer */}
    </>
  );
};
