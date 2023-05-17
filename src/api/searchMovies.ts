import Joi from "joi";

type Parameters = {
  origin: string;
  apiKey: string;
  title: string;
  page: number;
};

export async function requestSearchMovies({ origin, apiKey, title, page }: Parameters): Promise<SearchMoviesResponse> {
  const url = `${origin}?type=movie&apikey=${apiKey}&s=${title}&page=${page}`;

  try {
    const response = await fetch(url);
    const payload = await response.json();
    const { error, value } = schema.validate(payload);

    if (error) throw new Error(error.message);
    return value;
  } catch (error) {
    let errorMessage;
    if (error instanceof Error) errorMessage = error.message;
    else errorMessage = String(error);

    console.error(errorMessage);
    throw new Error(errorMessage);
  }
}

const schema = Joi.object<SearchMoviesResponse>({
  Response: Joi.string()
    .regex(/^(True|False)$/)
    .required(),
  Error: Joi.string(),
  Search: Joi.array().items(
    Joi.object({
      Title: Joi.string().required(),
      Year: Joi.string()
        .regex(/^\d{4}$/)
        .required(),
      imdbID: Joi.string().required(),
      Type: Joi.string()
        .regex(/^movie$/)
        .required(),
      Poster: Joi.string().required(),
    })
  ),
  totalResults: Joi.string().regex(/^\d+$/),
});
