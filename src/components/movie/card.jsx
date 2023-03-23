import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import { PRIMARY_COLOR } from "../../utils/constants/colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

const styles = {
  cardContainer: {
    height: { xs: 310, md: 390 },
    width: "95%",
    maxWidth: { xs: "100%", md: 450 },
    borderRadius: 2,
    mb: 1,
    ml: 1,
    boxSizing: "border-box",
  },
  cardMediaImg: {
    cursor: "pointer",
    height: { xs: 150, md: 220 },
  },
  noPosterFoundText: {
    height: { xs: 150, md: 220 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardDate: {
    position: "absolute",
    top: 0,
    backgroundColor: PRIMARY_COLOR,
    px: 1,
    height: "60px",
    borderEndEndRadius: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 7,
  },
  cardYear: {
    color: "red",
    fontSize: 15,
  },
  cardTitleAndFavoriteContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardFavorite: { cursor: "pointer" },
  cartTitle: {
    fontSize: { xs: 14, md: 16 },
  },
  yearsAndView: {
    display: "flex",
    gap: 2,
    mt: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionText: { fontWeight: "bold", fontSize: { xs: 12, md: 14 } },
  playIcon: { pl: 1 },
};

export const MovieCard = ({ movie, ...rest }) => {
  return (
    <Grid item {...rest}>
      <Card sx={styles.cardContainer}>
        {movie?.Poster !== "N/A" ? (
          <CardMedia
            component="img"
            image={movie?.Poster}
            sx={styles.cardMediaImg}
          />
        ) : (
          <Box sx={styles.noPosterFoundText}>
            <Typography>No Poster found Yet</Typography>
          </Box>
        )}

        {movie?.Year ? (
          <Box sx={styles.cardDate}>
            <Typography sx={styles.cardYear} data-testid="year">
              {movie?.Year}
            </Typography>
          </Box>
        ) : null}
        <CardContent>
          <Box sx={styles.cardTitleAndFavoriteContainer}>
            <Box sx={{ ml: -1 }}>
              <IconButton>
                <FavoriteBorderIcon color="primary" sx={styles.cardFavorite} />
              </IconButton>
            </Box>
            <Typography
              gutterBottom
              variant="body1"
              color="neutral.300"
              noWrap
              sx={styles.cartTitle}
              data-testid="title"
            >
              {movie?.Title}
            </Typography>
          </Box>
          <Box sx={styles.yearsAndView}>
            <Typography color="primary" data-testid="views">
              312 K views
            </Typography>
            <Typography color="primary" data-testid="in-year">
              In Year {movie?.Year}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="outlined">
            <Typography variant="body1" sx={styles.actionText} noWrap>
              Watch now
            </Typography>
            <PlayCircleFilledWhiteIcon sx={styles.playIcon} />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
