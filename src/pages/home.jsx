import { Box, Container, Grid } from "@mui/material";

import { MovieCard } from "../components/movie/card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Filter } from "../components/common/filter";
import { DataSource } from "../patterns/data-source/data-source";
import { FetchData } from "../redux/global/api";

const Home = () => {
  const state = useSelector((state) => state?.global);
  const dispatch = useDispatch();
  const { url, data, status } = state;
  useEffect(() => {
    dispatch(FetchData({ url }))
      .unwrap()
      .then((data) => {})
      .catch((err) => {});
  }, [dispatch, url]);

  return (
    <Box
      component="main"
      sx={{
        mt: 17,
      }}
    >
      <Box
        sx={{
          mx: -1,
        }}
      >
        <Container maxWidth={false}>
          <Box
            sx={{
              my: 2,
            }}
          >
            <Filter />
          </Box>
          <Grid container spacing={2}>
            <DataSource data={data} resourceName="movie" status={status}>
              <MovieCard xs={12} md={4} lg={3} />
            </DataSource>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
