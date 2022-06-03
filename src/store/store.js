import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../slices/movieSlice";
import modalReducer from "../slices/modalSlice";

export const store = configureStore({
  reducer: {
    movieReducer,
    modalReducer,
  },
});
