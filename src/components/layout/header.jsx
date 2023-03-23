import { Box, Typography } from "@mui/material";
import "./../../styles/header.css";
import { useDispatch, useSelector } from "react-redux";
import { LINK1, LINK2, LINK3 } from "../../utils/constants/api-source";
import { PRIMARY_COLOR } from "../../utils/constants/colors";
import { FetchData } from "../../redux/global/api";

const styles = {
  activeItem: {
    height: "1px",
    width: "100%",
    backgroundColor: "white",
    mt: "-2px",
  },
  navContainer: {
    height: 80,
    backgroundColor: PRIMARY_COLOR,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    mt: -0.4,
  },
};

const ActiveItem = () => {
  return (
    <Box
      sx={styles.activeItem}
    />
  );
};
export const Header = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.global);
  const { url } = state;
  const fetchDataByUrl = (url) => {
    dispatch(FetchData({ url }))
      .unwrap()
      .then((data) => {})
      .catch((err) => {});
  };

  return (
    <Box
      sx={styles.navContainer}
    >
      <Box>
        <ul>
          <li>
            <Typography
              className={`tp-animation`}
              onClick={() => {
                fetchDataByUrl(LINK1);
              }}
              data-testid="movie1"
            >
              Movies 1
            </Typography>
            {url === LINK1 && <ActiveItem />}
          </li>
          <li>
            <Typography
              className={`tp-animation`}
              onClick={() => {
                fetchDataByUrl(LINK2);
              }}
              data-testid="movie2"
            >
              Movies 2
            </Typography>
            {url === LINK2 && <ActiveItem />}
          </li>
          <li>
            <Typography
              className={`tp-animation`}
              onClick={() => {
                fetchDataByUrl(LINK3);
              }}
              data-testid="movie3"
            >
              Movies 3
            </Typography>
            {url === LINK3 && <ActiveItem />}
          </li>
        </ul>
      </Box>
    </Box>
  );
};
