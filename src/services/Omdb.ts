import { requestGetMovie } from "../api/getMovie";
import { requestSearchMovies } from "../api/searchMovies";

class Omdb {
  private readonly origin = "https://www.omdbapi.com/";
  private readonly apiKey = import.meta.env.VITE_OMDB_API_KEY;

  getMovie = async (id: string): Promise<GetMovieResponse> => {
    return await requestGetMovie({ origin: this.origin, apiKey: this.apiKey, id });
  };

  searchMovie = async ({ title, page }: { title: string; page: number }): Promise<SearchMoviesResponse> => {
    return await requestSearchMovies({ origin: this.origin, apiKey: this.apiKey, title, page });
  };
}

export const omdbService = new Omdb();
