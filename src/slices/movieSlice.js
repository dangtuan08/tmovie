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

export const getListMoviesPopuler = createAsyncThunk(
  "movie/getListMoviesPopuler",
  async ({ type, params }) => {
    // console.log(type, params);
    const response = await tmdbApi.getMoviesList(type, { params });
    return response;
  }
);

export const getListMoviesTopRate = createAsyncThunk(
  "movie/getListMoviesTopRate",
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
    [getListMoviesPopuler.pending]: (state, action) => {
      state.status = "pending";
    },
    [getListMoviesPopuler.fulfilled]: (state, action) => {
      state.listMoviePopular = action.payload;
      state.status = "success";
      state.loading = false;
    },
    [getListMoviesTopRate.fulfilled]: (state, action) => {
      state.listMovieTopRate = action.payload;
      state.status = "success";
      state.loading = false;
    },
  },
});

export default movieSlice.reducer;
