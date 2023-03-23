import { Box, Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SortBy } from "./sort-by";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/global";

export const Filter = () => {
  const [search, setSearch] = useState("");
  const state = useSelector((state) => state?.global);
  const { originalData } = state;
  const [_originalData, _setData] = useState([...state?.originalData]);
  useEffect(() => {
    _setData([...state?.originalData]);
  }, [state?.originalData]);
  const [sortByValue, setSortByValue] = useState(null);
  const dispatch = useDispatch();
  const handleSortBy = (val) => {
    if (val === "title") {
      const result = _originalData?.sort((a, b) => {
        if (a.Title > b?.Title) return -1;
        if (a.Title < b?.Title) return 1;
        return 0;
      });
      dispatch(setData(result));
    } else if (val === "year") {
      const result = _originalData?.sort((a, b) => {
        if (a.Year > b?.Year) return 1;
        if (a.Year < b?.Year) return -1;
        return 0;
      });
      dispatch(setData(result));
    } else if (val === "poster") {
      const result = _originalData?.sort((a, b) => {
        if (a?.Posterr > b?.Posterr) return -1;
        if (a?.Posterr < b?.Posterr) return 1;
        return 0;
      });
      dispatch(setData(result));
    }
  };

  const requestSearch = (val) => {
    const filterData = originalData?.filter((item) => {
      return (
        item?.Title?.toLowerCase().includes(val?.toLowerCase()) ||
        item?.Year?.toLowerCase().includes(val?.toLowerCase())
      );
    });
    dispatch(setData(filterData));
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box>
          <TextField
            placeholder={"Search by title"}
            fullWidth
            value={search}
            onChange={(e) => {
              requestSearch(e.target.value);
              setSearch(e.target.value);
            }}
            sx={{ mt: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ cursor: "pointer" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <SortBy
          value={sortByValue}
          onChange={(event, val) => {
            setSortByValue(val);
            handleSortBy(val?.value);
          }}
        />
      </Grid>
    </Grid>
  );
};
