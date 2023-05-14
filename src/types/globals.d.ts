type FlowlessFunction = () => void;

type ThemeMode = "light" | "dark";

type MovieSearchResult = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type MovieSearch = {
  title: string;
  page: number;
  pageResults: Array<MovieSearchResult>;
  totalResults: number;
};

type AsyncOutcome<Type = undefined> =
  | {
      succeeded: true;
      payload: Type;
    }
  | {
      succeeded: false;
      payload?: undefined;
    };

type GetMoviePayload =
  | {
      Response: "True";
      Search: Array<MovieSearchResult>;
      totalResults: string;
    }
  | {
      Response: "False";
      Error: string;
    };
