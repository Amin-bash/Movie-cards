import { Autocomplete, TextField, Typography } from "@mui/material";

export const SortBy = (props) => {
  const { value, onChange } = props;

  const options = [
    {
      value: "title",
      title: "Title",
    },
    {
      value: "year",
      title: "Year",
    },
    {
      value: "poster",
      title: "Poster",
    },
  ];
  return (
    <Autocomplete
      options={options}
      value={value}
      sx={{ mt: 1 }}
      getOptionLabel={(option) => option.title}
      isOptionEqualToValue={(option, value) => option?.value === value?.value}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={"Sort by"}
          sx={{
            color: "#4c4c4c",
          }}
        />
      )}
      renderOption={(props, option) => (
        <Typography
          sx={{
            color: "#4c4c4c",
            cursor: "pointer",
          }}
          {...props}
        >
          {option?.title}
        </Typography>
      )}
    />
  );
};
