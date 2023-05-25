import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { omdbService } from "../../services/Omdb";

interface ModalMovieDetailState {
  status: "idle" | "pending" | "succeeded" | "failed";
  displayed: boolean;
  displayedMovieId: string;
  movie: GetMovieResponseSuccess;

  errorMessage?: string;
}

const initialState: ModalMovieDetailState = {
  status: "idle",
  displayed: false,
  displayedMovieId: "",
  movie: {
    Title: "",
    Year: "",
    Type: "movie",
    Poster: "N/A",
    Plot: "",
    Actors: "",
    Response: "True",
    imdbID: "",
  },
};

export const fetchMovie = createAsyncThunk("movie/fetchMovie", omdbService.getMovie);

export const modalMovieDetailSlice = createSlice({
  name: "modalMovieDetail",
  initialState,
  reducers: {
    display: (state, action: PayloadAction<string>) => {
      state.displayed = true;
      state.displayedMovieId = action.payload;
    },
    remove: (state) => {
      state.displayed = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        if (action.payload.Response === "True") {
          state.status = "succeeded";
          state.movie = action.payload;
        } else {
          state.status = "failed";
          state.errorMessage = action.payload.Error;
        }
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
      });
  },
});

export const { display, remove } = modalMovieDetailSlice.actions;

export default modalMovieDetailSlice.reducer;
