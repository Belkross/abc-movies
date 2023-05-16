import Joi from "joi";
import { OMDB_URL } from "../constants";

export async function searchMovies({ title, page }: { title: string; page: number }): Promise<SearchMoviesResponse> {
  const url = `${OMDB_URL}?type=movie&apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${title}&page=${page}`;

  try {
    const response = await fetch(url);
    const payload = await response.json();
    const { error, value } = schema.validate(payload);

    if (error) throw new Error(error.message);
    return value;
  } catch (error) {
    console.error(error);
    throw new Error(error as string);
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
