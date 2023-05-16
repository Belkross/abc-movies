import Joi from "joi";
import { OMDB_URL } from "../constants";

export async function getMovie(id: string): Promise<GetMovieResponse> {
  const url = `${OMDB_URL}?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${id}`;

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

const schema = Joi.object<GetMovieResponse>({
  Response: Joi.string()
    .regex(/^(True|False)$/)
    .required(),
  Error: Joi.string(),
  Title: Joi.string().required(),
  Year: Joi.string().pattern(/^\d{4}$/),
  Actors: Joi.string(),
  Plot: Joi.string(),
  Poster: Joi.string(),
  imdbID: Joi.string().required(),
  Type: Joi.string()
    .regex(/^movie$/)
    .required(),
}).unknown();
