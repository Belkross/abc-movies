type FlowlessFunction = () => void;

type ThemeMode = "light" | "dark";

type MovieSearchResult = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

interface Movie {
  Title: string;
  Year: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbID: string;
  Type: "movie";
}

type SearchMoviesResponse =
  | {
      Response: "True";
      Search: Array<MovieSearchResult>;
      totalResults: string;
    }
  | {
      Response: "False";
      Error: string;
    };

interface GetMovieResponseSuccess extends Movie {
  Response: "True";
}

type GetMovieResponse =
  | GetMovieResponseSuccess
  | {
      Response: "False";
      Error: string;
    };
