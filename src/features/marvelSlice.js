import { createSlice } from "@reduxjs/toolkit";

const marvelSlice = createSlice({
  name: "marvel",

  initialState: {
    characters: null,
    series: null,
    loading: false,
    error: false,
    search: null,
    searcSeries: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getSuccess, fetchFail } = marvelSlice.actions;
export default marvelSlice.reducer;
