import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../api/tmdbApi";

const initialState = {
  isActive: false,
  idVideo: "",
};

export const openModalVideoThunk = createAsyncThunk(
  "modal/getIdVideo",
  async ({ type, id }) => {
    const response = await tmdbApi.getVideos(type, id);
    return response.results[0].key;
  }
);

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModalVideo: (state, action) => {
      state.isActive = true;
      state.idVideo = action.payload;
    },
    closeModalVideo: (state, action) => {
      state.isActive = false;
      state.idVideo = "";
    },
  },
  extraReducers: {
    [openModalVideoThunk.fulfilled]: (state, action) => {
      state.isActive = true;
      state.idVideo = action.payload;
    },
  },
});
export const { openModalVideo, closeModalVideo } = modalSlice.actions;
export default modalSlice.reducer;
