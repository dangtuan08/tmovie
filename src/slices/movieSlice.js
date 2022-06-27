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
    // console.log(type, params);
    const response = await tmdbApi.getMoviesList(type, { params });
    return response;
  }
);

export const getListTVTopRate = createAsyncThunk(
  "movie/getListTVTopRate",
  async ({ type, params }) => {
    // console.log(type, params);
    const response = await tmdbApi.getTvList(type, { params });
    return response;
  }
);

export const getListTVPopuler = createAsyncThunk(
  "movie/getListTVPopuler",
  async ({ type, params }) => {
    // console.log(type, params);
    const response = await tmdbApi.getTvList(type, { params });
    return response;
  }
);

export const getListSimilar = createAsyncThunk(
  "movie/getListSimilar",
  async ({ id, cate }) => {
    // console.log(id, cate);
    const response = await tmdbApi.similar(cate, id);
    return response;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    resetSimilar: (state, action) => {
      state.loading = true;
      state.listSimilar = [];
    },
  },
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
    [getListTVTopRate.fulfilled]: (state, action) => {
      state.listTvTopRate = action.payload;
      state.status = "success";
      state.loading = false;
    },
    [getListTVPopuler.fulfilled]: (state, action) => {
      state.listTvPopular = action.payload;
      state.status = "success";
      state.loading = false;
    },
    [getListSimilar.fulfilled]: (state, action) => {
      state.listSimilar = action.payload;
      state.status = "success";
      state.loading = false;
    },
  },
});

export const { resetSimilar } = movieSlice.actions;

export default movieSlice.reducer;
