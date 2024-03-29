import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { omdbService } from "../../../services/Omdb";
import { interpreteErrorMessage } from "./interpreteErrorMessage";

interface SearchState {
  status: "idle" | "pending" | "succeeded" | "failed";
  title: string;
  page: number;
  pageResults: Array<MovieSearchResult>;
  totalResults: number;
  errorMessage?: string;
}

const initialState: SearchState = {
  status: "idle",
  title: "",
  page: 1,
  pageResults: [],
  totalResults: 0,
};

export const fetchMovies = createAsyncThunk("movie/fetchMovies", omdbService.searchMovie);

export const movieSearchSlice = createSlice({
  name: "movieSearch",
  initialState,
  reducers: {
    updateTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
      state.page = 1;
    },
    updatePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    clearResults: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        if (action.payload.Response === "True") {
          const { totalResults, Search } = action.payload;
          state.totalResults = Number.parseInt(totalResults, 10);
          state.pageResults = Search;
          state.status = "succeeded";
        } else {
          state.totalResults = 0;
          state.pageResults = [];
          state.errorMessage = interpreteErrorMessage(action.payload.Error);
          state.status = "failed";
        }
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = interpreteErrorMessage(action.error.message);
      });
  },
});

export const { updateTitle, updatePage, clearResults } = movieSearchSlice.actions;

export default movieSearchSlice.reducer;
