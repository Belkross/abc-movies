import { configureStore } from "@reduxjs/toolkit";
import modalMovieDetailSlice from "./features/modalMovieDetailSlice";
import movieSearchSlice from "./features/movieSearch/movieSearchSlice";

export const store = configureStore({
  reducer: {
    modalMovieDetail: modalMovieDetailSlice,
    movieSearch: movieSearchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
