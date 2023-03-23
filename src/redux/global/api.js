import { createAsyncThunk } from "@reduxjs/toolkit";
export const FetchData = createAsyncThunk(
  "global/fetch-data",
  async (dt, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { url } = dt;
      const response = await fetch(url);
      if (!response.ok) {
        return rejectWithValue(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      return {
        data: actualData?.Search,
        url,
      };
    } catch {
      return rejectWithValue("Unknow error");
    }
  }
);
