import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../api/tmdbApi";

const initialState = {
  status: null,
  loading: true,
  listMoviePopular: [],
  listMovieTopRate: [],

  listTvPopular: [],
  listTvTopRate: [],
  listSimilar: [],
};

export const getListMovies = createAsyncThunk(
  "movie/getListMovies",
  async ({ type, params }) => {
    console.log(type, params);
    const response = await tmdbApi.getMoviesList(type, { params });
    return response;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {
    [getListMovies.pending]: (state, action) => {
      state.status = "pending";
    },
    [getListMovies.fulfilled]: (state, action) => {
      state.listMoviePopular = action.payload;
      state.status = "success";
      state.loading = false;
    },
  },
});

export default movieSlice.reducer;
